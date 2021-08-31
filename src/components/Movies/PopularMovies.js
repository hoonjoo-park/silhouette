import React from 'react';
import {usePopularMovies} from "../../routes/movie/usePopularMovies";
import {Link} from "react-router-dom";
import styled from "styled-components";
import {FaStar} from "react-icons/fa";

function PopularMovies() {
    const {popularMovies} = usePopularMovies();
    return (
        <Wrapper>
            <PopularHead>
                <h2>Populars</h2>
            </PopularHead>
            <GridBox>
                {popularMovies && 
                    popularMovies.map((movie) => (
                        <Items key={movie.id}>
                            <ImgBox to={`/movie/${movie.id}`} bgurl={movie.poster_path}>
                            </ImgBox>
                            <Title>{movie.title}</Title>
                            <Year>
                                {movie.release_date.slice(0,4)}
                                <span className="star"><FaStar style={{color : "#DD5765", paddingTop:"0.2em", marginLeft:"0.5rem"}}/></span>
                                <span className="rating">{movie.vote_average}/10</span>
                            </Year>
                        </Items>
                    ))
                }
            </GridBox>
        </Wrapper>
    )
}

export default PopularMovies

const Wrapper = styled.div`
    margin : 5rem auto 0 auto;
    width : 80vw;
    height : auto;
`
const PopularHead = styled.div`
    &>h2 {
        padding-top : 0.5em;
        border-top : 2px solid #ffff;
        margin : 3rem 0 2rem 0;
        font-size : 2.2rem;
        font-weight : 700;
        color : #ffff;
    }
`
const GridBox = styled.ul`
    display : grid;
    grid-template-columns : repeat(5, minmax(18%, auto));
    gap : 3rem 2rem;
    grid-template-rows : 1fr 1fr;
`
const Items = styled.li`
    
`
const ImgBox = styled(Link)`
    display : inline-block;
    margin-bottom : 1rem;
    width : 100%;
    height : 20rem;
    border-radius : 8px;
    background-image : url(${props => `https://image.tmdb.org/t/p/w300${props.bgurl}`});
    background-position : center;
    background-size : cover;
    cursor: pointer;
    transition : all .5s;
`
const Title = styled.div`
    font-size : 1.1rem;
    margin-bottom : 0.5rem;
    color : #ffff;
`
const Year = styled.div`
    font-size : 1.1rem;
    color : #ffff;
    & .rating {
        font-size : 1.1rem;
        margin-left : 0.2rem;
        color : #ffff;
    }
`
