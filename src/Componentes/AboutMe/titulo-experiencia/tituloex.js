import React from 'react';
import styled from 'styled-components';

const Title = () => {
    return (
            <TitleDiv>
                <ExperiencieTitle>ABOUT ME...</ExperiencieTitle>
            </TitleDiv>
    )
}

export default Title;

const TitleDiv = styled.div`{
    margin: 20px 50px;
    padding: 20px;
    margin-top: 60px;
    height: fit-content;
    width: width;
    display: flex;

    @media (max-width: 768px) {
        margin: 10px 30px;
        padding-bottom: 5px;
        text-align:center;
    }
}`

const ExperiencieTitle = styled.h3`{
    margin: 0;
    padding: 0;
    color: #d09683;
    letter-spacing: 1px;
    font-size: 2.55rem;
    text-shadow: 1.5px 1.5px 2px black;
    font-family: 'Russo One', sans-serif;
    letter-spacing: 2px;
    margin: 0; 
    transition: .5s ease-in-out;

    &:hover {
        text-shadow: 2px 2px 2px white;
    }

    @media (max-width: 768px){
        margin-top: 40px;
    }
}`
