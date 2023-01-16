import { useState } from "react";
import { InputSearch, LabelSearch, RemoveBtn } from "./SearchField.styled";
import { ReactComponent as SearchIcon } from "../../../icons/search-icon.svg";
import { ReactComponent as RemoveIcon } from "../../../icons/remove-search-query-icon.svg";

export const SearchField = ({ searchNews }) => {
	const [searchQuery, setSearchQuery] = useState('');

	const searchHandler = e => {
		setSearchQuery(e.target.value);
		searchNews(e.target.value);
	}

	const removeQuery = () => {
		setSearchQuery("")
		searchNews("");
	}

	return <LabelSearch>
		<InputSearch type="search" placeholder="Search" value={searchQuery} onChange={searchHandler} />
		{!searchQuery && <SearchIcon />}
		{searchQuery && <RemoveBtn type="button" onClick={removeQuery}><RemoveIcon /></RemoveBtn>}
	</LabelSearch>
}