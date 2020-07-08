import React, { useState } from 'react';
import styled from 'styled-components';
import styleFont from '../../../Componentes/icomoon/style.css';

const Contacto = () => {
    return(
        <ContactBtn>
            <$Contacto>Contacto!</$Contacto>
            <SocialMediaLink href="#"><i class="iconBtn-instagram"></i></SocialMediaLink>
            <SocialMediaLink href="#"><i class="iconBtn-linkedin"></i></SocialMediaLink>
            <SocialMediaLink href="#"><i class="iconBtn-github"></i></SocialMediaLink>
            <SocialMediaLink href="#"><i class="iconBtn-envelop"></i></SocialMediaLink>
            <SocialMediaLink href="#"><i class="iconBtn-mobile"></i></SocialMediaLink>
        </ContactBtn>
    )
}

export default Contacto;

const ContactBtn = styled.div`{
    width: 150px;
    height: 40px;
    background: #ccc;
    border-radius: 40px;
    overflow: hidden;
    display: flex;
    align-items: center;
    position: absolute;
    bottom: 50px;
    cursor: pointer;
    transition: .3s linear;
    box-shadow: 0 0 40px rgba(0, 0, 0, 0.1),
                inset 5px 2px 10px rgba(0, 0, 0, .1);
    margin: 30px;

    &:hover {
        transform: scale(1.1);
    }
}`;

const $Contacto = styled.span`{
    position: absolute;
    width: 100%;
    height: 100%;
    background: #333;
    color: #f1f1f1;
    text-align: center;
    letter-spacing: 1px;
    line-height: 38px;
    z-index: 999;
    font-size: 18px;
    transition: .3s linear;
    border-radius: 40px;

    &:hover {
        transform: translateY(-200%);
        transition-delay: .1s;
    }
}`;

const SocialMediaLink = styled.a`{
    text-decoration: none;
    flex: 1;
    font-size: 18px;
    color: #061e24;
    text-align: center;
}`;
