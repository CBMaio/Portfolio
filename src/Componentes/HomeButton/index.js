import React, { useState } from 'react';
import styled from 'styled-components';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import Navbar from '../Main/Navbar/index'

const HomeButton = () => {
    return (
        <Home>
            <Link to="/" className="Enlace">Home</Link>
        </Home>

    )
}

export default HomeButton;

const Home = styled.h3`{
    font-family: 'Cedarville Cursive', cursive;
    display: flex; 
    justify-content: flex-end;
    font-weight: 300;
    font-size: 27px;
    margin: 30px 50px;
    margin-bottom: 0;
    cursor: pointer;
    position: fixed;
    bottom: 0;
    left: 0;
    
    &:hover {
        opacity: 0.7;
    }
    
    & > .Enlace {
        text-decoration: none;
        color: #626d71;

        @media (max-width: 768px) {
            background: #ccc;
            font-size: 20px;
            width: 100%;
            font-size: 22px;
            text-align: center;
            margin: 0;
        }
    }

    @media (max-width: 768px) {
        position: relative;
        margin: 0;
        width: 100%;
    }
}`
