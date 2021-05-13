import React from "react";
import search from '../assets/icons/search.svg'

const Search = () => {

  return(
    <>
    <form action="#" className="chat__form">
      <label htmlFor="search" className="form__label">
        <input type="text" id="search" placeholder="Search input" className="form__input form__search" />
        <img src={search} className="form__icon chat__icon" alt="icon-search" />
      </label>
    </form>
    </>
  )
}

export default Search

