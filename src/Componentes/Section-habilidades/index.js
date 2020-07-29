import React from 'react';
import styled from 'styled-components'
import Section from './Skills-Section/index.js';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import HomeButton from '../HomeButton/index.js';
import Navbar from '../Main/Navbar/index'

const SectionSkills = () => {

    return(
        <Content>
            <StyledNavbar>
                <Navbar
                    background = '#ddd'
                    letterColor = '#061e24'
                />
            </StyledNavbar>
            <SkillsTitleContain>
                <SkillsTitle>Skills</SkillsTitle>
            </SkillsTitleContain>
           <Section/> 
           <HomeButton/>
        </Content>
    )
}

export default SectionSkills;

const StyledNavbar = styled.div`{
    box-sizind: border-box;
    margin: 0;
    padding: 0;
    position: absolute;
    top: 0;
    width: 100%;
}`


const Content = styled.div`{
    background: #F1F1F2;
    height: 100vh;
    width: 100%;
    padding-top: 3%;
    box-sizing: border-box;

}`;

const SkillsTitleContain = styled.div`{
    display: flex;
    justify-content: center;
    margin-top: 30px;
}`

const SkillsTitle = styled.h1`{
    border: 2px solid #626d71;
    border-radius: 40px;
    font-family: 'Russo One', sans-serif;
    font-size: 3em;
    display: flex;
    justify-content: center;
    align-items: center;
    height: 15vh;
    width: 350px;
    text-transform: uppercase;
    letter-spacing: 3px;
    transition: 1s;
    background: #F5FFFF;
    color: #626d71;

    &:hover {
        transform: scale(1.075);
    };

    @media (max-width: 768px){
        width: 325px;    
    }

}`

