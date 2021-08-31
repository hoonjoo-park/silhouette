import React from 'react';
import {useMovieDetail} from "../routes/detail/useMovieDetail";
import styled from "styled-components";
import {FaStar} from "react-icons/fa";

function MovieDetail({match : {params : {id}}}) {
    const {detailList} = useMovieDetail(id);
    return (
        <DetailBox>
            <ImgBox bgurl={detailList.backdrop_path}></ImgBox>
            <FlexBox>
                <LeftBox>
                    <Title>{detailList.title}</Title>
                    <Info>
                        <span>
                            <FaStar style={{fontSize: "1.8rem", color : "#DD5765", paddingTop:"0.4em", marginRight:"0.5rem"}}/>
                            <span>{detailList.vote_average} / 10</span>
                        </span>
                        <span className="year">{detailList.release_date && (detailList.release_date).slice(0,4)}</span>
                        <span className="company">{detailList.production_companies && detailList.production_companies.length > 0 ? detailList.production_companies[0].name : ""}</span>
                        <span className="country">{detailList.production_countries && detailList.production_countries.length > 0 ? detailList.production_countries[0].iso_3166_1 : ""}</span>
                    </Info>
                    <Desc>{detailList.overview}</Desc>
                    <IMDb href={`https://www.imdb.com/title/${detailList.imdb_id}/`} target="_blank">IMDb</IMDb>
                </LeftBox>
                <RightBox>
                    <Poster bgurl={detailList.poster_path}></Poster>
                </RightBox>
            </FlexBox>
        </DetailBox>
    )
}

export default MovieDetail

const DetailBox = styled.div`
    display : flex;
    align-items : center;
    min-width : 100vw;
    height : 100vh;
`
const ImgBox = styled.div`
    position : absolute;
    top : 0;
    left : 0;
    width : 100%;
    height : 100%;
    background-image : url(${props => `https://image.tmdb.org/t/p/original${props.bgurl}`});
    background-position : center;
    background-size : cover;
    filter : blur(3.5px) brightness(50%);
    z-index : -1;
`
const FlexBox = styled.div`
    display : flex;
    width : 100%;
    margin-top : 6.5rem;
    height : 65%;
`
const LeftBox = styled.div`
    margin-left : 7rem;
    max-width : 45%;
`
const Info = styled.div`
    margin-top : 2.5rem;
    & span {
        color : #F7F7F7;
        font-size : 1.4rem;
        font-weight : 500;
        margin-right : 1rem;
    }
    & .year {
        font-style : italic;
        margin-right : 1.5rem;
    }
    & .company{
        color : #1FAB89;
        margin-right : 1.5rem;
    }
    & .country {
        color : #3490DE;
        margin-right : 1.5rem;
    }
`
const IMDb = styled.a`
    display : inline-block;
    margin-top : 3rem;
    width : 7.5rem;
    padding : 1.1em;
    border-radius : 15px;
    background-color : #FFBD39;
    text-align : center;
    font-size : 1.3rem;
    font-weight : 900;
`

const Title = styled.h1`
    font-size : 4.5rem;
    font-weight : 900;
    max-height : 8.5rem;
    overflow : scroll;
    color : #ffff;
`
const Desc = styled.div`
    margin-top : 2.5rem;
    color : #F7F7F7;
    text-align : justify;
    font-size : 1.5rem;
    line-height : 1.5rem;
`

const RightBox = styled.div`
    margin-left : auto;
    margin-right : 12rem;
`
const Poster = styled.div`
    border-radius : 5px;
    width : 26rem;
    height : 100%;
    background-image : url(${props => `https://image.tmdb.org/t/p/w500${props.bgurl}`});
    background-size : cover;
    background-position : center;
    background-repeat : no-repeat;
`