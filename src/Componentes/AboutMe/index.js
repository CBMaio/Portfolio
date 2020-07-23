import React from 'react';
import styled from 'styled-components';
import Title from './titulo-experiencia/tituloex.js';
import Subtitle from './Mis-trabajos/mis-trabajos.js'; 

const AboutMeBox = () => {
    return (
        <SectionBackground>
            <Title/>
            <Subtitle/>
        </SectionBackground>
    )
}

export default AboutMeBox;

const SectionBackground = styled.div`{
      background: linear-gradient(180deg, rgba(241,241,242,1) 0%, rgba(241,241,242,1) 20%, rgba(250,250,250,1) 40%, rgba(250,250,250,1) 70%, rgba(255,255,255,1) 100%);
      height: 100vh;
      box-sizing: border-box;
      margin: 0;
      padding: 0;
      display: flex; 
      flex-direction: column;
  }`;
  