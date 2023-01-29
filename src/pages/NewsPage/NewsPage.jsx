import { useEffect, useState } from 'react';

import { Section } from '../../components/CommonComponents/Section/Section';
import { Container } from '../../components/CommonComponents/Container/Container';
import { SectionTitle } from '../../components/CommonComponents/SectionTitle/SectionTitle';
import { SearchField } from '../../components/CommonComponents/SearchField/SearchField';
import { NewsList } from '../../components/NewsList/NewsList';
import { getNews } from '../../serveсes/getNews';
import { Loader } from '../../components/Loader/Loader';

const NewsPage = () => {
	const [news, setNews] = useState([]);
	const [isLoading, setIsLoading] = useState(true);

	useEffect(() => {
		async function fetch() {
			try {
				const response = await getNews({});

				if (response.length === 0) {
					throw new Error();
				}

				sortByDate(response);
			} catch (error) {
				console.log(error);
			}
		}
		fetch();
	}, []);

	const searchNews = async query => {
		const searchQuery = query.toLowerCase();
		const response = await getNews({});
		const foundNews = response.filter(
			news =>
				news.title.toLowerCase().includes(searchQuery) ||
				news.description.toLowerCase().includes(searchQuery)
		);
		sortByDate(foundNews);
	};

	const sortByDate = array => {
		const addDateForSort = array.map(news => {
			return { ...news, dateForSort: Date.parse(new Date(news.date)) };
		});

		const sortedByDateNews = addDateForSort.sort(
			(a, b) => b.dateForSort - a.dateForSort
		);

		setNews(sortedByDateNews);
		setIsLoading(false);
	};

	return (
		<Section>
			<Container>
				<SectionTitle text="News" />
				{isLoading ? (
					<Loader />
				) : (
					<>
						<SearchField searchFunction={searchNews} />
						<NewsList news={news} />
					</>
				)}

				{news.length === 0 && !isLoading && (
					<div style={{ textAlign: 'center' }}>
						There are not news according to your query. Try again.
					</div>
				)}
			</Container>
		</Section >
	);
};

export default NewsPage;
