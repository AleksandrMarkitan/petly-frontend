import { NoticeCategoryItem } from "../../components/NoticeCategoryItem/NoticeCategoryItem";
import { List } from "./NoticesCategoriesList.styled";

export const NoticesCategoriesList = ({ data }) => {

	return (
		<List>
			{data.map((item) =>
				<NoticeCategoryItem key={item._id} data={item} />
			)}
		</List>
	)
}
