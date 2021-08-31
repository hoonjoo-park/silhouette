import React from 'react'
import { Link, withRouter } from "react-router-dom";
import styled from "styled-components";


export default withRouter(({location : {pathname}}) => (
        <Head>
            <NavUl>
                <Logo to={"/"}>SILHOUETTE</Logo>
                <Menu>
                    <Item selected={pathname === "/"} to="/">Movies</Item>
                    <Item selected={pathname === "/TV"} to="/TV">TV</Item>
                    <Item selected={pathname === "/Search"} to="/Search">Search</Item>
                </Menu>
            </NavUl>
        </Head>
));

const Head = styled.header`
    z-index : 1;
    position : absolute;
    top : 0;
    width : 100vw;
    height : 10vh;
    background-color : transparent;
`
const NavUl = styled.ul`
    display : flex;
    align-items : center;
    height : 100%;
`
const Logo = styled(Link)`
    color : #ffff;
    font-family:'Lucida Sans', 'Lucida Sans Regular', 'Lucida Grande', 'Lucida Sans Unicode', Geneva, Verdana, sans-serif;
    text-shadow: 2.5px 2.5px 2px rgba(150, 150, 150, 1);
    font-size : 1.9rem;
    font-weight : bold;
    margin-left : 7rem;
`
const Menu = styled.ul`
    display : flex;
    justify-content : space-evenly;
    height : 100%;
    width : 40%;
    margin-left : auto;
    margin-right : 5rem;
`
const Item = styled(Link)`
    display : flex;
    align-items : center;
    justify-content : center;
    height : 100%;
    width : 7rem;
    padding : 0.5em;
    font-size : 1.3rem;
    font-weight : bold;
    border-bottom : ${props => props.selected ? "5px solid #DD5765" : "none"};
    color : #ffff;
    /* color : ${props => props.selected ? "#DD5765" : "#ffff"}; */
    transition : border .2s ease-out;
`