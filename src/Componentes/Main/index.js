import React from 'react';
import styled from 'styled-components';
import Title from './Title/index.js'
import Navbar from './Navbar/index.js'
import Contacto from './Contacto/index.js'

const Main = () => {
    return(
        <PrincipalPage>
            <Navbar/>
            <Title/>
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
}`;
