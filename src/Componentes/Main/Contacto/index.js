import React from 'react';
import styled from 'styled-components';
import styleFont from '../../../Componentes/icomoon/style.css';

const Contacto = () => {
    return(
        <ContactBtn>
            <SocialMediaLink target="_blank" href="https://www.linkedin.com/in/carolinamaio/"><i className="iconBtn-linkedin"></i></SocialMediaLink>
            <SocialMediaLink target="_blank" href="https://github.com/CBMaio"><i className="iconBtn-github"></i></SocialMediaLink>
            <SocialMediaLink href="mailto:carolinabelenmaio@gmail.com"><i className="iconBtn-envelop"></i></SocialMediaLink>
        </ContactBtn>
    )
}

export default Contacto;

const ContactBtn = styled.div`{
    width: 100%;
    height: 70px;
    background: #9A9EAB;
    overflow: hidden;
    display: flex;
    align-items: center;
    position: absolute;
    bottom: 0;
    cursor: pointer;
    //superposición por encima del botón HOME
    z-index: 999;
    transition: .3s linear;
    left: 0;
}`;

const SocialMediaLink = styled.a`{
    background: #9A9EAB;
    text-decoration: none;
    flex: 1;
    color: #5D535E;
    font-size: 20px;
    text-align: center;

    &:hover {
        transform: scale(1.1);
        color: #061e24;
    }

    @media (max-width: 768px){
        font-weight: lighter;
    }
}`;
