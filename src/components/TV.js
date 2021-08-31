import React from 'react'
import PopularTV from "./TVs/PopularTV";
import OnTheAirTV from "./TVs/OnTheAirTV";
import TopRatedTV from "./TVs/TopRatedTV"
import Footer from "./Footer";

function TV() {
    return (
        <>
            <OnTheAirTV/>
            <PopularTV/>
            <TopRatedTV/>
            <Footer/>
        </>
    )
}

export default TV
