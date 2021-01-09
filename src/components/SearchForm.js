import React, { useRef, useEffect } from "react";
import { useGlobalContext } from "../context";
const SearchForm = () => {
  const { setSearchTerm } = useGlobalContext();
  const searchValue = React.useRef("");
  useEffect(() => {
    searchValue.current.focus();
  });
  const searchCocktail = () => {
    setSearchTerm(searchValue.current.value);
  };
  const handleSubmit = (e) => {
    e.preventDefault();
  };
  return (
    <div className="searchFormPos">
      <form onSubmit={handleSubmit}>
        <label htmlFor="name">Search your favourite cocktail</label>
        <input
          type="text"
          id="name"
          ref={searchValue}
          onChange={searchCocktail}
        />
      </form>
    </div>
  );
};
export default SearchForm;
