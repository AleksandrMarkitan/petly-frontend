import { useEffect, useState } from "react"

import { Section } from "../../components/CommonComponents/Section/Section"
import { Container } from "../../components/CommonComponents/Container/Container"
import { SectionTitle } from "../../components/CommonComponents/SectionTitle/SectionTitle"
import { SearchField } from "../../components/CommonComponents/SearchField/SearchField"
import { NewsList } from "../../components/NewsList/NewsList"
import { getNews } from "../../serveсes/getNews"

export const NewsPage = () => {
	const [news, setNews] = useState([]);
	// const [page, setPage] = useState(1);
	// const [maxPage, setMaxPage] = useState(0);

	useEffect(() => {
		async function fetch() {
			try {
				const response = await getNews({ page: 1, limit: 6 });

				if (response.length === 0) {
					throw new Error();
				}

				// const allNews = await getNews({ page: 1, limit: 0 });
				// setMaxPage(Math.ceil(allNews.length / 6))


				setNews(response)
			}
			catch (error) {
				console.log(error);
			}
		}
		fetch()
	}, [])

	// const loadMoreHandler = () => {
	// 	setPage(prevValue => prevValue + 1);

	// 	async function fetch() {
	// 		try {
	// 			const response = await getNews({ page, limit: 6 });

	// 			if (response.length === 0) {
	// 				throw new Error();
	// 			}
	// 			setNews([...news, ...response])
	// 		}
	// 		catch (error) {
	// 			console.log(error);
	// 		}
	// 	}
	// 	fetch()
	// }

	// console.log(maxPage);

	return <Section>
		<Container>
			<SectionTitle text="News" />
			<SearchField />
			<NewsList news={news} />
			{/* <button type="button" onClick={loadMoreHandler}>Load more</button> */}
		</Container>
	</Section>
}