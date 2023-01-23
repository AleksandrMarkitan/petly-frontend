import { useState } from "react";
import {
  InputSearch,
  LabelSearch,
  RemoveBtn,
} from "./NoticesSearch.styled";
import { ReactComponent as SearchIcon } from "../../icons/search-icon.svg";
import { ReactComponent as RemoveIcon } from "../../icons/remove-search-query-icon.svg";

export const NoticesSearch = ({ onSearch }) => {
  const [searchQuery, setSearchQuery] = useState("");

  const onSubmit = (e) => {
    e.preventDefault();
    onSearch(searchQuery);
  };

  const searchHandler = (e) => {
    setSearchQuery(e.target.value);
  };

  const removeQuery = () => {
    setSearchQuery("");
    onSearch("");
  };

  return (
    <form onSubmit={onSubmit}>
      <LabelSearch>
        <InputSearch
          type="text"
          placeholder="Search"
          value={searchQuery}
          onChange={searchHandler}
        />
        {!searchQuery && <SearchIcon />}
        {searchQuery && (
          <RemoveBtn type="button" onClick={removeQuery}>
            <RemoveIcon />
          </RemoveBtn>
        )}
      </LabelSearch>
    </form>
  );
};
