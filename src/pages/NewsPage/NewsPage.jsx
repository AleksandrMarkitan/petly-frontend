import { useEffect, useState } from "react"

import { Section } from "../../components/CommonComponents/Section/Section"
import { Container } from "../../components/CommonComponents/Container/Container"
import { SectionTitle } from "../../components/CommonComponents/SectionTitle/SectionTitle"
import { SearchField } from "../../components/CommonComponents/SearchField/SearchField"
import { NewsList } from "../../components/NewsList/NewsList"
import { getNews } from "../../serveсes/getNews"

 const NewsPage = () => {
	const [news, setNews] = useState([]);

	useEffect(() => {
		async function fetch() {
			try {
				const response = await getNews({});

				if (response.length === 0) {
					throw new Error();
				}

				sortByDate(response)
			}
			catch (error) {
				console.log(error);
			}
		}
		fetch()
	}, [])

	const searchNews = async (query) => {
		const searchQuery = query.toLowerCase();
		const response = await getNews({});
		const foundNews = response.filter(news => news.title.toLowerCase().includes(searchQuery) || news.description.toLowerCase().includes(searchQuery));
		sortByDate(foundNews)
	}

	const sortByDate = (array) => {
		const addDateForSort = array.map(news => {
			return { ...news, dateForSort: Date.parse(new Date(news.date)) }
		})

		const sortedByDateNews = addDateForSort.sort((a, b) => b.dateForSort - a.dateForSort)

		setNews(sortedByDateNews)
	}

	return <Section>
		<Container>
			<SectionTitle text="News" />
			<SearchField searchFunction={searchNews} />
			<NewsList news={news} />
			{news.length === 0 && <div style={{ textAlign: "center" }}>Новин за вашим запитом не знайдено.</div>}
		</Container>
	</Section>
}

export default NewsPage;