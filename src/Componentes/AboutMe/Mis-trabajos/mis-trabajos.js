import React from 'react';
import styled from 'styled-components';

const Subtitle = () => {
    return (
        <TextAboutMe>
            <TituloParagaph>Hey! Gracias por visitar mi perfil...</TituloParagaph>
            <Paragraph>
                Te cuento un poco sobre mí... De manera autodidácta me capacito en las tecnologías de desarrollo FrontEnd. Considero que el compromiso y el entusiasmo por aprender son los pilares fundamentales y, la constancia, una de las claves más importantes para alcanzar nuestros objetivos. Busco un crecimiento profesional en una empresa para continuar desarrollando mis habilidades.
            </Paragraph>
        </TextAboutMe>
    )
}

export default Subtitle;

const TextAboutMe = styled.section`{
    display: flex;
    flex-direction: column;
    height: auto;
    margin-top: 20px;
    justify-content: space-around;
    align-items: center;
    text-align: center;
    font-family: 'Ubuntu', sans-serif;
    font-size: 1.2rem;

    @media (max-width: 768px){
        margin: 0;
        height: 100%;
        justify-content: space-evenly;
    }
}`;

const Paragraph = styled.p`{
    //border: 1px solid red;
    width: 40%;
    text-align: center;
    line-height: 25px;
    font-weight: 200;

    @media (max-width: 768px){
        width: 80%;
        text-align: justify;
        line-height: 30px;
    }
}`

const TituloParagaph = styled.h2`{
    font-weight: 500;
}`