import React from 'react';
import styled from 'styled-components';

const Title = () => {
    return(
        <flexBoxName>
            <Name>Carolina</Name>
        </flexBoxName>
    )
}

export default Title;

const Name = styled.h1`{
    font-family: 'Cedarville Cursive', cursive;
    font-weight: normal;
    font-size: 7rem;
    display: flex;
    justify-content: center;
    margin-top: 10%;
}`
