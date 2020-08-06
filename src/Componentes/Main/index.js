import React, { useState } from 'react';
import styled from 'styled-components';
import Navbar from './Navbar/index.js';
import FotoPerfil from '../../Archivos/img/foto-Reverse.png';
import FotoPerfilInvertida from '../../Archivos/img/image.png';

const Main = () => {

    const [estado, setEstado] = useState("dia");
    const cambiarEstado = () => {estado === "dia" ? setEstado("noche") : setEstado("dia")};

    return(
        <PrincipalPage className = {estado} >
            <Navbar
                background = '#c76a7b'
                letterColor = '#fff'
            />
            <NameContain onClick = {cambiarEstado}>
                <Name className = {estado}>Carolina</Name>
            </NameContain>
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

    @media (max-width: 450px){
        background-size: cover;
        background-position: bottom;
    }

    @media (min-width: 451px and max-width: 768px){
        background-size: cover;
        background-position: bottom;
    }
        
    &.noche {
        background: black;
        background-image: url("${FotoPerfilInvertida}");
        background-repeat: no-repeat;
        background-size: contain;
        transition: all .3s ease-out;
        background-position: right;

        @media (max-width: 450px){
            background-size: cover;
            background-position: bottom;
        }

        @media (min-width: 451px and max-width: 768px){
            background-size: cover;
            background-position: bottom;
        }

     }

     &.dia {
         color: #feebed;
         transition: all .3s ease-out;
      }
}`;

const Name = styled.h1`{
    font-family: 'Cedarville Cursive', cursive;
    font-weight: normal;
    font-size: 7rem;
    display: flex;
    justify-content: center;
    margin-top: 8%;
    cursor: pointer;
    &.noche {
       color: #c76a7b;
    }
   
    &.dia {
        color: black;
    }
    
     @media (max-width: 450px){
        font-size: 4rem;
        margin-top: 5%;
        justify-content: flex-start;
        margin-left: 8%;
     }

     @media (min-width: 451px) and (max-width: 768px){
        font-size: 5rem;
        margin-top: 5%;
        justify-content: flex-start;
        margin-left: 3%;
    }

    @media (min-width: 769px) and (max-width: 1020px){
        justify-content: center;
        margin-top: 0;
}`;

const NameContain = styled.div`{
    border: 1px solid transparent;    
    height: 75%;
    cursor: pointer;
}`