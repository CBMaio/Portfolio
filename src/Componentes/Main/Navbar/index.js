import React from 'react';
import styled from 'styled-components';

const Navbar = () => {
    return (
        <NavbarList>
            <List>
                <ListItem>Sobre mí</ListItem>
                <ListItem>Trabajos</ListItem>
                <ListItem>Expeciencia</ListItem>
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
    border-bottom: 5px solid #fff;
}`

const List = styled.ul`{
    display: inline-flex;
    list-style-type: none;  
    width: 40%;
    justify-content: space-around;
    align-items: center;
}`

const ListItem = styled.li`{
    color: #fff;
    font-family: 'Ubuntu', sans-serif;
    font-size: 1.1rem
}`