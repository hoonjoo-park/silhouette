import React from 'react';
import styled from "styled-components";
import {FaFacebookSquare, FaInstagramSquare, FaGithubSquare} from "react-icons/fa"
function Footer() {
    return (
        <FooterBox>
            <Left>
                <div>SILHOUETTE</div>
            </Left>
            <Center>
                <div>Developed By : HoonJoo Park</div>
                <div>Copyright. All rights reserved From 2021</div>
                <div>From 2021</div>
            </Center>
            <Right>
                <FaFacebookSquare style={{color:"#ffff", fontSize:"2rem", marginRight:"1.5rem"}}/>
                <FaInstagramSquare style={{color:"#ffff", fontSize:"2rem", marginRight:"1.5rem"}}/>
                <FaGithubSquare style={{color:"#ffff", fontSize:"2rem", marginRight:"1.5rem"}}/>
            </Right>
        </FooterBox>
    )
}

export default Footer

const FooterBox = styled.div`
    display : flex;
    align-items : center;
    width : 100vw;
    height : 28vh;
    background-color : #242D44;
`
const Left = styled.div`
    margin-left : 10.5rem;
    margin-right : 10rem;
    & div{
        color : #ffff;
        text-shadow: 3px 3px 2px rgba(150, 150, 150, 1);
        font-size : 2rem;
        font-weight : bold;
        line-height : 2.5rem;
        text-align : center;
    }
`
const Center = styled.div`
    & div {
        color : #ffff;
        font-size : 1.1rem;
        font-weight : bold;
        line-height : 2.5rem;
        /* text-align : center; */
    }
`
const Right = styled.div`
    /* display : flex; */
    margin-left : auto;
    margin-right : 20rem;
`