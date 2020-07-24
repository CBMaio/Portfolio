import React, { useState } from 'react';
import styled from 'styled-components';
import Contacto from '../Contacto/index.js';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';

const Navbar = () => {

    const [sideBar, setSideBar] = useState("oculto");
    const mostrarSideBar = () => {sideBar == "oculto" ? setSideBar("ver") : setSideBar("oculto")};

    return (
        <NavbarList>
            <OpenBtn onClick = {mostrarSideBar} className = {sideBar}>&#9776;</OpenBtn>
            <CloseBtn  onClick = {mostrarSideBar} className = {sideBar}>&times;</CloseBtn>
            <List className = {sideBar}>                
                <ListItem><Link to="/skills" className="Enlace">Habilidades</Link></ListItem>
                <ListItem>Experiencia</ListItem>
                <ListItem><Link to="/aboutMe" className="Enlace">Sobre mí..</Link></ListItem>
                <span>
                    <Contacto/>
                </span>
            </List>
        </NavbarList>
    )
}

export default Navbar;

const NavbarList = styled.nav`{
    width: 100%;
    height: 60px;
    background: #c76a7b;
    display: flex;
    justify-content: flex-end;
}`

const List = styled.ul`{
    display: inline-flex;
    list-style-type: none;  
    width: 15%;
    justify-content: flex-start;
    display: flex;
    align-items: flex-start;
    flex-direction: column;
    position: absolute;
    top: 60px;
    margin: 0;
    padding: 20px;
    padding-bottom: 0;
    height: 87.8vh;
    background: #c76a7b;
    border-box: box-sizing;

    &.oculto {
        display: none;
    }
    
    &.ver {
        display: flex;
        
        @media (max-width: 768px) {
            width: 90%; 
            display: flex;
            text-align: center;
            align-items: center;
            justify-content: flex-start;
            line-height: 70px;
        };
        
    }
    
}`


const ListItem = styled.li`{
    font-family: 'Ubuntu', sans-serif;
    font-size: 1.1rem;
    margin: 25px 0;
    margin-bottom: 0;
    
    & > .Enlace {
            text-decoration: none;
            color: #fff;
        }
        
    &:hover{
        text-decoration: underline;
    }

    @media (max-width: 768px){
        font-size: 24px;
        font-weight: lighter;
    }
}`

const OpenBtn = styled.span`{
    box-sizing: border-box;
    font-size: 35px;
    margin: 5px;
    margin-right: 15px;
    cursor: pointer;

    &.ver{
        display: none;
    }
}`;

const CloseBtn = styled.span`{
    box-sizing: border-box;
    font-size: 35px;
    margin: 5px;
    margin-right: 15px;
    cursor: pointer;
   
    &.oculto {
        display: none;
    }

    &.ver {
        display: flex;
    }
}`
