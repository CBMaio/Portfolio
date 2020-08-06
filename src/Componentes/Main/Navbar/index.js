import React, { useState } from 'react';
import styled from 'styled-components';
import Contacto from '../Contacto/index.js';
import { Link } from 'react-router-dom';

const useNavbar = inicial => {
    const [sideBar, setSideBar] = useState(inicial);
    
    const mostrarSideBar = () => {sideBar === "oculto" ? setSideBar("ver") : setSideBar("oculto")};

    return { sideBar, mostrarSideBar }
}



const Navbar = (props) => {

    const { sideBar, mostrarSideBar } = useNavbar('oculto')

    return (
        <NavbarList 
            style = {{
                   background: `${props.background}` 
            }}
        >
            <OpenBtn onClick = {mostrarSideBar} className = {sideBar}>&#9776;</OpenBtn>
            <CloseBtn  onClick = {mostrarSideBar} className = {sideBar}>&times;</CloseBtn>
            <List className = {sideBar}
                style = {{
                    background: `${props.background}`
                }}>     

                <ListItem>
                        <Link to="/skills" className="Enlace"
                            style = {{
                                color: `${props.letterColor}`,
                                opacity: `${props.habilidadesOpacity}`
                            }}>
                                Habilidades
                        </Link>
                </ListItem>
                <ListItem>
                    <Link to="/aboutMe" className="Enlace"
                            style = {{
                                color: `${props.letterColor}`,
                                opacity: `${props.aboutMeOpacity}`
                            }}>
                        Sobre mí..
                    </Link>
                </ListItem>
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
    border-box: box-sizing;

    &.oculto {
        display: none;
    }
    
    &.ver {
        display: flex;
        
        @media (max-width: 768px) {
            height: 100%vh;
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
