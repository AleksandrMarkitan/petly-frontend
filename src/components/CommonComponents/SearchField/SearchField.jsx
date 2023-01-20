import { useState } from "react";
import { InputSearch, LabelSearch, RemoveBtn } from "./SearchField.styled";
import { ReactComponent as SearchIcon } from "../../../icons/search-icon.svg";
import { ReactComponent as RemoveIcon } from "../../../icons/remove-search-query-icon.svg";

export const SearchField = ({ searchFunction }) => {
	const [searchQuery, setSearchQuery] = useState('');

	const searchHandler = e => {
		setSearchQuery(e.target.value);
		searchFunction(e.target.value);
	}

	const removeQuery = () => {
		setSearchQuery("")
		searchFunction("");
	}

	return <LabelSearch>
		<InputSearch type="text" placeholder="Search" value={searchQuery} onChange={searchHandler} />
		{!searchQuery && <SearchIcon />}
		{searchQuery && <RemoveBtn type="button" onClick={removeQuery}><RemoveIcon /></RemoveBtn>}
	</LabelSearch>
}