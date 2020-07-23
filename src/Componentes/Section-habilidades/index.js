import React from 'react';
import styled from 'styled-components'
import Section from './Skills-Section/index.js'

const SectionSkills = () => {

    return(
        <Content>
            <SkillsTitleContain>
                <SkillsTitle>Skills</SkillsTitle>
            </SkillsTitleContain>
           <Section/> 
        </Content>
    )
}

export default SectionSkills;

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
