import EllipsisText from "react-ellipsis-text";
import { ScrollUpBtn } from "../CommonButtons/ScrollUpBtn/ScrollUpBtn";
import { List, ListItem, NewsTitle, Description, AdditionalInfo, Date, Link, Wrapper } from "./NewsList.styled"

export const NewsList = ({ news }) => {

	const editDate = (date) => {
		return date.split('-').reverse().join("/")
	}

	return <><List>
		{news.map(({ _id, title, description, date, url }) => <ListItem key={_id}>
			<Wrapper>
				<NewsTitle>
					<EllipsisText text={title} length={60} />
				</NewsTitle>
				<Description>{description}</Description>
				<AdditionalInfo>
					<Date>{editDate(date)}</Date>
					<Link href={url} target="_blank" rel="noreferrer">Read more</Link>
				</AdditionalInfo>
			</Wrapper>
		</ListItem>)}
	</List>
		<ScrollUpBtn />
	</>
}