import React from 'react'
import PopularMovies from "./Movies/PopularMovies";
import NowPlayingMovies from "./Movies/NowPlayingMovies";
import TopRatedMovies from "./Movies/TopRatedMovies"
import Footer from "./Footer";
function Movies() {
    return (
        <>
            <NowPlayingMovies/>
            <PopularMovies/>
            <TopRatedMovies/>
            <Footer/>
        </>
    )
}

export default Movies
