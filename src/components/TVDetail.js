import React from 'react'
import {useTVDetail} from "../routes/detail/useTVDetail";
import {Link} from "react-router-dom";
import styled from "styled-components";
import {FaStar} from "react-icons/fa";

function TVDetail({match : {params : {id}}}) {
    const {detailList} = useTVDetail(id);
    console.log(detailList);
    return (
        <DetailBox>
            <ImgBox bgurl={detailList.backdrop_path}></ImgBox>
            <FlexBox>
                <LeftBox>
                    <Title>{detailList.name}</Title>
                    <Info>
                        <span>
                            <FaStar style={{fontSize: "1.8rem", color : "#DD5765", paddingTop:"0.4em", marginRight:"0.5rem"}}/>
                            <span>{detailList.vote_average} / 10</span>
                        </span>
                        <span className="year">{detailList.first_air_date && (detailList.first_air_date).slice(0,4)}</span>
                        <span className="company">{detailList.production_companies && detailList.production_companies.length > 0 ? detailList.production_companies[0].name : ""}</span>
                        <span className="country">{detailList.production_countries && detailList.production_countries.length > 0 ? detailList.production_countries[0].iso_3166_1 : ""}</span>
                        <span><IMDb href={`https://www.imdb.com/title/${detailList.imdb_id}/`} target="_blank">IMDb</IMDb></span>
                    </Info>
                    <Desc>{detailList.overview ? detailList.overview : "Sorry... Can't find any descriptions or overviews..."}</Desc>
                    <CollectionBox>
                        {detailList.seasons && detailList.seasons.length > 1 ? 
                            detailList.seasons.map((season)=>(
                                <Collection bgurl={season.poster_path}>{season.name}</Collection>
                            ))
                        :""}
                    </CollectionBox>
                </LeftBox>
                <RightBox>
                    <Poster bgurl={detailList.poster_path}></Poster>
                </RightBox>
            </FlexBox>
        </DetailBox>
    )
}

export default TVDetail

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
    height : 68%;
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
        color : #F7F7F7;
        margin-right : 1.5rem;
    }
    & .country {
        color : #F7F7F7;
        margin-right : 1.5rem;
    }
`
const IMDb = styled.a`
    display : inline-block;
    margin-left : 1rem;
    width : 6.5rem;
    padding : 0.8em;
    border-radius : 15px;
    color : #1E2022;
    background-color : #FFBD39;
    text-align : center;
    font-size : 1.3rem;
    font-weight : 900;
`
const CollectionBox = styled.div`
    display : inline-flex;
    padding : 0.5em 0;
    justify-content : flex-start;
    margin-top : 3rem;
    width : 50vw;
    overflow-x : scroll;
`
const Collection = styled(Link)`
    display : inline-flex;
    padding : 0.4em;
    margin-right : 4rem;
    align-items : center;
    justify-content : center;
    flex-shrink : 0;
    width : 10rem;
    height : 10rem;
    border-radius : 30%;
    font-size : 1.2rem;
    line-height :1.5rem;
    text-align : center;
    font-weight : 900;
    color : #f7f7f7;
    background-image : url(${props => `https://image.tmdb.org/t/p/w300${props.bgurl}`});
    background-position : center;
    background-size : cover;
    box-shadow: 3px 5px 6px 0px rgba(0,0,0,0.75);
    cursor: pointer;
    transition : all .3s;
    &:hover {
        transform : scale(1.02);
    }
`

const Title = styled.h1`
    font-size : 4.5rem;
    font-weight : 900;
    color : #ffff;
`
const Desc = styled.div`
    margin-top : 2.5rem;
    max-height : 11rem;
    min-height : 8rem;
    color : #F7F7F7;
    text-align : justify;
    overflow :scroll;
    text-overflow:ellipsis;
    font-size : 1.3rem;
    line-height : 1.6rem;
    opacity :0.9;
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