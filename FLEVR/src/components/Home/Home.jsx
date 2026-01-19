import React from 'react'
import Nav from "./Nav";
import Slider from './Slider';
import Trends from './Trends';
import MoviesPrev from './MoviesPrev';
import SeriesPrev from './SeriesPrev';
import TvPrev from './TvPrev';

const Home = () => {
  return (
    <>
    <Nav />
    <Slider />
    <Trends />
    <MoviesPrev />
    <SeriesPrev />
    <TvPrev />
    </>
  )
}

export default Home