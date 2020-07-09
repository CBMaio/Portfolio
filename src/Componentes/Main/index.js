import React, { useState } from 'react';
import styled from 'styled-components';
//import Title from './Title/index.js'
import Navbar from './Navbar/index.js'
import Contacto from './Contacto/index.js'

const Main = () => {

    const [color, setColor] = useState("negro");
    const cambiarColor = () => {color == "negro" ? setColor("blanco") : setColor("negro")};
    
    return(
        <PrincipalPage className = {color} >
            <Navbar/>
            <div>
                <Name onClick = {cambiarColor} className = {color}>Carolina</Name>
            </div>
            <Contacto/>
        </PrincipalPage>
    )
}

export default Main;

const PrincipalPage = styled.header`{
    width: 100%;
    height: 100vh;
    background-color: #feebed;
    box-sizing: border-box;
        
    &.blanco {
        background: black;
        transition: all 0.5s ease-out;
     }
     &.negro {
         color: #feebed;
         transition: all 0.5s ease-out;
      }
}`;

const Name = styled.h1`{
    font-family: 'Cedarville Cursive', cursive;
    font-weight: normal;
    font-size: 7rem;
    display: flex;
    justify-content: center;
    margin-top: 10%;
    cursor: pointer;
    
    &.blanco {
       color: #c76a7b;
    }
    &.negro {
        color: black;
     }
    
}`;