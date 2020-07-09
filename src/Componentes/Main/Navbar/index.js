import React, { useState } from 'react';
import styled from 'styled-components';
import Contacto from '../Contacto/index.js'

const Navbar = () => {

    const [sideBar, setSideBar] = useState("oculto");
    const mostrarSideBar = () => {sideBar == "oculto" ? setSideBar("ver") : setSideBar("oculto")};

    return (
        <NavbarList>
            <OpenBtn onClick = {mostrarSideBar} className = {sideBar}>&#9776;</OpenBtn>
            <CloseBtn  onClick = {mostrarSideBar} className = {sideBar}>&times;</CloseBtn>
            <List className = {sideBar}>                
                <ListItem>Sobre mí</ListItem>
                <ListItem>Trabajos</ListItem>
                <ListItem>Expeciencia</ListItem>
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
    border-bottom: 3px solid #fff;
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
    height: 70%;
    background: #c76a7b;
    border-box: box-sizing;

    @media (max-width: 728px){
        width: 90%;
     }

    
    &.oculto {
        display: none;
    }

    &.ver {
        display: flex;
    }
    
}`

const ListItem = styled.li`{
    color: #fff;
    font-family: 'Ubuntu', sans-serif;
    font-size: 1.1rem;
    margin: 25px 0;
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