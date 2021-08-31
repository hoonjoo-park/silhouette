import React, {useState, useEffect, useRef} from 'react';
import {Link} from "react-router-dom";
import {SearchApi} from "../api";
import styled from "styled-components";
import {FaStar, FaSearch} from "react-icons/fa";

function Search() {
    const inputValue = useRef();
    const [searchResults, setSearchResults] = useState([]);
    const [isLoaring, setIsLoading] = useState(true);

    const handleSubmit = ()=>{
        const target = inputValue.current.value;
        fetchSearchResults(target);
    }

        async function fetchSearchResults(target){
            try {
                const {data : {results}} = await SearchApi.getResult(target)
                setSearchResults(results);
                console.log(searchResults);
            } catch(e){
                console.log(e);
            } finally {
                setIsLoading(false)
                console.log(searchResults);
            }
        }
    
    // const {searchResults} = useSearch();
    return (
        <Wrapper>
            <InputBox>
                <Input type="text" placeholder="Type Anything You Want :)" ref={inputValue}/>
                <SearchBtn onClick={handleSubmit}><FaSearch/></SearchBtn>
            </InputBox>
            <GridBox>
                {searchResults ? searchResults.map((result) => (
                        <Items key={result.id}>
                            <ImgBox to={`/movie/${result.id}`} bgurl={result.poster_path}>
                            </ImgBox>
                            <Title>{result.name || result.title}</Title>
                            <Year>
                                {/* {result.first_air_date ? result.first_air_date.slice(0,4) : result.release_date.slice(0.4)} */}
                                <span className="star"><FaStar style={{color : "#DD5765", paddingTop:"0.2em", marginLeft:"0.5rem"}}/></span>
                                <span className="rating">{result.vote_average}/10</span>
                            </Year>
                        </Items>)) : <div>Found Nothing...</div>}
            </GridBox>
        </Wrapper>
    )
}

export default Search

const Wrapper = styled.div`
    margin : 12rem auto;
    width : 80vw;
    height : auto;
`
const InputBox = styled.div`
    position : relative;
    display : flex;
    align-items : center;
    justify-content : center;
`
const Input = styled.input`
    width : 65vw;
    height :5.5rem;
    margin-bottom : 8rem;
    padding : 0 1em;
    border: none;
    border-bottom : 3px solid #d1d1d1;
    outline : 0;
    font-size : 1.9rem;
    font-weight : 700;
    color : #f4f4f4;
    background-color : transparent;
    &::placeholder{
        color : #d1d1d1;
    }
`
const SearchBtn = styled.button`
    position : absolute;
    top : 10%;
    right : 11%;
    display : inline-block;
    background-color : transparent;
    border : none;
    width : 2.8rem;
    height : 2.8rem;
    font-size : 2.8rem;
    color :#DD5765;
    cursor: pointer;
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