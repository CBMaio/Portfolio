import React, { useState } from 'react';
import styled from 'styled-components';
import styleFont from '../../../Componentes/icomoon/style.css';

const Contacto = () => {
    return(
        <ContactBtn>
          {/*  <ContactText>Contacto!</ContactText> */}
            <SocialMediaLink target="_blank" href="https://www.linkedin.com/in/carolinamaio/"><i class="iconBtn-linkedin"></i></SocialMediaLink>
            <SocialMediaLink href="https://www.instagram.com/caromaio/"><i class="iconBtn-instagram"></i></SocialMediaLink>
            <SocialMediaLink href="https://github.com/CBMaio"><i class="iconBtn-github"></i></SocialMediaLink>
            <SocialMediaLink href="mailto:carolinabelenmaio@gmail.com"><i class="iconBtn-envelop"></i></SocialMediaLink>
            <SocialMediaLink href="#"><i class="iconBtn-mobile"></i></SocialMediaLink>
        </ContactBtn>
    )
}

export default Contacto;

const ContactBtn = styled.div`{
    width: 100%;
    height: 40px;
    background: #9A9EAB;
    //border-radius: 40px;
    overflow: hidden;
    display: flex;
    align-items: center;
    position: absolute;
    bottom: 50px;
    cursor: pointer;
    transition: .3s linear;
    left: 0;
}`;

/*const ContactText = styled.span`{
    position: absolute;
    width: 100%;
    height: 100%;
    background: #333;
    color: #f1f1f1;
    text-align: center;
    letter-spacing: 1px;
    line-height: 38px;
    z-index: 1000;
    font-size: 18px;
    transition: .3s linear;
    border-radius: 40px;

    &:hover {
        transform: translateX(100%);
        transition: opacity .5s .125s ease-out;
    }
}`;
*/
const SocialMediaLink = styled.a`{
    background: #9A9EAB;
    text-decoration: none;
    flex: 1;
    color: #5D535E;
    font-size: 18px;
    text-align: center;

    &:hover {
        transform: scale(1.1);
        color: #061e24;
    }
}`;
