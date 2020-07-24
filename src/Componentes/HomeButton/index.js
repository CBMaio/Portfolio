import React from 'react';
import styled from 'styled-components';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';

const HomeButton = () => {
    return (
        <Home>
            <Link to="/main" className="Enlace">Home</Link>
        </Home>

    )
}

export default HomeButton;

const Home = styled.h3`{
    background: #F1F1F2;
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
    right: 0;
    
    &:hover {
        opacity: 0.7;
    }
    
    & > .Enlace {
        text-decoration: none;
        color: #626d71;

        @media (max-width: 768px) {
            font-size: 20px;
            width: 100%;
            font-size: 23px;
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
