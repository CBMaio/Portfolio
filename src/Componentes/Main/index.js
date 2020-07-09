import React, { useState } from 'react';
import styled from 'styled-components';
//import Title from './Title/index.js'
import Navbar from './Navbar/index.js';
import Contacto from './Contacto/index.js';
import FotoPerfil from '../../Archivos/img/foto_4-removebg-preview.png';
import FotoPerfilNoche from '../../Archivos/img/foto-removebg.png';

const Main = () => {

    const [color, setColor] = useState("negro");
    const cambiarColor = () => {color == "negro" ? setColor("blanco") : setColor("negro")};
    
    return(
        <PrincipalPage className = {color} >
            <Navbar/>
            <div>
                <Name onClick = {cambiarColor} className = {color}>Carolina</Name>
            </div>
        </PrincipalPage>
    )
}

export default Main;

const PrincipalPage = styled.header`{
    width: 100%;
    height: 100vh;
    background-color: #feebed;
    background-image: url("${FotoPerfil}");
    background-repeat: no-repeat;
    background-size: contain;
    box-sizing: border-box;

    @media (max-width: 650px){
        background-size: cover;
        background-position: bottom;
    }
        
    &.blanco {
        background: black;
        background-image: url("${FotoPerfilNoche}");
        background-repeat: no-repeat;
        background-size: contain;
        transition: all 1s ease-out;

        @media (max-width: 650px){
            background-size: contain;
            background-position: bottom;
        }
     }
     &.negro {
         color: #feebed;
         transition: all .7s ease-out;
      }
}`;

const Name = styled.h1`{
    font-family: 'Cedarville Cursive', cursive;
    font-weight: normal;
    font-size: 7rem;
    display: flex;
    justify-content: center;
    margin-top: 8%;
    margin-left: 20%;
    cursor: pointer;
    
    &.blanco {
       color: #c76a7b;

        @media (max-width: 650px){
            color: white;
        }
    }

   
    &.negro {
        color: black;
     }
    
     @media (max-width: 650px){
        font-size: 4rem;
        margin-top: 5%;
        justify-content: flex-start;
        margin-left: 8%;
     }
}`;