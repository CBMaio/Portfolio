import React from 'react';
import styled from 'styled-components';

const Section = () => {

    let habilidades = ["HTML5", "CSS3", "Javascript", "Bootstrap", "GIT", "React JS"];

    return (
            <ContainSkills>
                {
                    habilidades.map((habilidad) => (
                        <SkillStyle key = {habilidad}>{habilidad}</SkillStyle>
                    ))
                }
            </ContainSkills>
    )
}

export default Section;

const ContainSkills = styled.div`{
    width: 800px;
    height: auto;
    margin: auto;
    display: flex;
    flex-wrap: wrap;
    justify-content: center;

    @media (max-width: 768px){
        width: 100%;
    }
}`

const SkillStyle = styled.div`{
    background: #F5FFFF;
    border: 3px solid #626d71;
    width: 180px;
    height: 18vh;
    margin: 1.5rem;
    display: flex;
    justify-content: center;
    align-items: center;
    font-family: 'Russo One', sans-serif;
    font-size: 22px;
    letter-spacing: 1.5px;
    transition: .3s linear;
    color: #626d71;

    &:hover{
        box-shadow: inset 4px 4px #a1d6e2,
                    inset -4px -4px #a1d6e2;
        font-size: 24px;
    }

    @media (max-width: 450px){
        width: 150px;
        margin: 10px;
    }

    @media (min-width: 451px) and (max-width: 768px){
        width: 200px;
        margin: 1rem auto;
        font-size: 20px;
    }

}`