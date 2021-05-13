import React from "react";
// import './App.scss';

const Search = () => {

  return(
    <>
    <form action="#" className="chat__form">
      <label htmlFor="search" className="form__label">
        <input type="text" id="search" placeholder="Search input" className="form__input" />
        <img src="images/icons/search.svg" className="form__icon chat__icon" alt="icon-search" />
      </label>
    </form>
    </>
  )
}

export default Search

