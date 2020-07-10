import React from 'react';
import styled from 'styled-components'
import Section from './Skills-Section/index.js'

const Profile = () => {

    return(
        <Content>
            <SkillsTitleContain>
                <SkillsTitle>Skills</SkillsTitle>
            </SkillsTitleContain>
           <Section/> 
        </Content>
    )
}

export default Profile;

const Content = styled.div`{
    background: linear-gradient(to bottom, rgba(254,254,254,1) 0%, rgba(254,254,254,1) 24%, rgba(240,240,240,1) 63%, rgb(190, 190, 190, 1) 100%);
    height: 100vh;
    width: 100%;
}`;

const SkillsTitleContain = styled.div`{
    display: flex;
    justify-content: center;
    margin: 15px 0;


}`

const SkillsTitle = styled.h1`{
    border: 2px solid black;
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

    &:hover {
        transform: scale(1.075);
    };

    @media (max-width: 768px){
        width: 325px;    
    }

}`
