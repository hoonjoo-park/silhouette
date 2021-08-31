import React from "react";
import {HashRouter as Router, Redirect, Route, Switch } from "react-router-dom";
import Movies from "./Movies"
import Header from "./Header"
import TV from "./TV"
import Search from "./Search"
import MovieDetail from "./MovieDetail"
import TVDetail from "./TVDetail"

const Routers = () =>{
    return (
    <Router>
        <>
        <Header/>
            <Route path="/" exact component={Movies}/>
            <Route path="/tv" exact component={TV}/>
            <Route path="/search" component={Search}/>
            <Route path="/movie/:id" exact component={MovieDetail}/>
            <Route path="/tv/:id"  exact component={TVDetail}/>
            <Redirect from="*" to="/"/>
        </>
        
    </Router>
    )
}

export default Routers;