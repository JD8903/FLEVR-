import React from 'react'
import Navbar from './Navbar'
import Search from './Search'
import Lastsearch from './Lastsearch'
import GridSection from './GridSection'
const Searchbar = () => {
  return (
    <div className='wrap'>
    <Navbar />
    <div className='search-wrapper'>
        <Search />
    </div>
    <Lastsearch />
    <GridSection />
    
    </div>
  )
}

export default Searchbar