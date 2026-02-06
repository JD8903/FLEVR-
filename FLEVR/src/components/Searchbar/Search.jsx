import React from 'react'
import "./Search.css"
const Search = () => {
  return (
    <form>
        <div className='search'>
            <i className=" search-icon fa-solid fa-magnifying-glass"></i>
            <input className="search-input" type='search' placeholder='Search for anything'></input>

        </div>
    </form>
  )
}

export default Search