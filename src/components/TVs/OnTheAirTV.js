import React, {useState} from 'react';
import {Link} from "react-router-dom";
import styled from "styled-components";
import {useOnTheAirTVs} from "../../routes/tv/useOnTheAirTVs";

function OnTheAirTV() {
    const {onTheAirTVs} = useOnTheAirTVs();
    const [move, setMove] = useState(0);
    return (
        <BannerBox>
            <BannerUl>
                {onTheAirTVs.map((tv)=>(
                    <BannerLi key={tv.id} move={move}>
                        <MovieBG bgurl={tv.backdrop_path}>
                        </MovieBG>
                        <TVs>
                            <SectionLeft>
                                <h1>{tv.name}</h1>
                                <Button  to={`/tv/${tv.id}`}>Details</Button>
                            </SectionLeft>
                            <SectionRight>
                                <div>{tv.overview}</div>
                            </SectionRight>
                        </TVs>
                    </BannerLi>
                ))}
            </BannerUl>
            <ButtonBox>
                <button onClick={()=>setMove(0)}></button>
                <button onClick={()=>setMove(`-100%`)}></button>
                <button onClick={()=>setMove(`-200%`)}></button>
                <button onClick={()=>setMove(`-300%`)}></button>
            </ButtonBox>
        </BannerBox>
    )
}

export default OnTheAirTV

const BannerBox = styled.div`
    position : relative;
    height : 70vh;
`
const ButtonBox = styled.div`
    position : absolute;
    bottom : 5%;
    left :50%;
    transform : translateX(-50%);
    & > button {
        border : none;
        border-radius : 30px;
        width :2.5rem;
        height :0.5rem;
        margin-right : 1rem;
        background-color :#d1d1d1;
        cursor: pointer;
        transition : background-color .2s;
        &:hover{
            background-color : #DD5765;
        }
    }
`
const BannerUl = styled.ul`
    display : flex;
    flex-wrap : nowrap;
    overflow : hidden;
    height : 100%;
`
const BannerLi = styled.li`
    display : inline-block;
    min-width : 100vw;
    height : 100%;
    transition : transform .4s ease-in-out;
    transform : translateX(${props => props.move});
`
const MovieBG = styled.div`
    position : absolute;
    top : 0;
    z-index : 5;
    height : 70vh;
    width : 100%;
    background-image : url(${props => `https://image.tmdb.org/t/p/original${props.bgurl}`});
    background-size : cover;
    z-index : -1;
    filter : blur(1px) brightness(60%);
`
const TVs = styled.div`
    display : flex;
    position : relative;
    align-items : center;
    width : 100%;
    height : 100%;
`
const SectionLeft = styled.div`
    width : 40rem;
    margin-left : 7rem;
    & > h1{
        max-width : 35rem;
        font-size : 4.5rem;
        font-weight : 900;
        color:#ffff;
        margin-bottom : 3rem;
    }
`
const Button = styled(Link)`
    display : flex;
    align-items : center;
    justify-content : center;
    width : 10rem;
    height : 3.8rem;
    border : none;
    border-radius : 7px;
    font-size : 1.3rem;
    font-weight : 900;
    background-color : #DD5765;
    color : #ffff;
    cursor: pointer;
`
const SectionRight = styled.div`
    margin-right : 6rem;
    width : 40rem;
    & > div{
        color : #ffff;
        font-size : 1.5rem;
        line-height : 2rem;
        text-align : justify;
    }
`