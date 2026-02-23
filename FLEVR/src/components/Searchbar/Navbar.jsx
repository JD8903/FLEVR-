import React from 'react'
import "./Navbar.css"

const Navbar = () => {
  return (
    <header className="navbar">
      <nav className="nav-links">
        <a>Home</a>
        <a>Movie</a>
        <a>Tv Serial</a>
        <a>Series</a>
        <a>Favourite</a>
        <a>
          <i className="search-iconn fa-solid fa-magnifying-glass"></i>
        </a>
      </nav>

      <div className="USER">USER</div>
    </header>
  )
}

export default Navbar
