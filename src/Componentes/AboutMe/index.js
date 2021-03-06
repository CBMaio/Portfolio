import React from 'react';
import styled from 'styled-components';
import Title from './titulo-experiencia/tituloex.js';
import Subtitle from './Mis-trabajos/mis-trabajos.js'; 
import HomeButton from '../HomeButton/index';
import Navbar from '../Main/Navbar/index'

const AboutMeBox = () => {
    return (
        <SectionBackground>
            <StyledNavbar>
                <Navbar
                    background = "#ddd"
                    letterColor = '#061e24'
                    habilidadesOpacity = '1'
                    aboutMeOpacity = '0.5'
                />
            </StyledNavbar>
            <Title/>
            <Subtitle/>
            <HomeButton/>
        </SectionBackground>
    )
}

export default AboutMeBox;

const StyledNavbar = styled.div`{
    box-sizind: border-box;
    margin: 0;
    padding: 0;
    position: absolute;
    top: 0;
    width: 100%;
}`

const SectionBackground = styled.div`{
      background: linear-gradient(180deg, rgba(241,241,242,1) 0%, rgba(241,241,242,1) 20%, rgba(250,250,250,1) 40%, rgba(250,250,250,1) 70%, rgba(255,255,255,1) 100%);
      height: 100vh;
      box-sizing: border-box;
      margin: 0;
      padding: 0;
      display: flex; 
      flex-direction: column;
      position: relative;
  }`;
  