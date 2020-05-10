import React, {FunctionComponent} from "react";
import styled from "styled-components";
import {NavLink} from "react-router-dom";
import Link from "next/link";

interface ISim {
    simName: string,

    setStatus(simName: string): void
}

const SimButton = styled.button`
    padding: 10px;
    width: 300px;
    border: 0;
    border-radius: 6px;
    letter-spacing: 1px;
    background: #177daa;
    color: #FDFCFC;
    font-family: 'Open Sans Condensed', sans-serif;
    font-weight: bold;
    font-size: 2.3rem;
     box-shadow: 0 0 10px rgba(0,0,0,0.5);
    :hover{
     box-shadow: 4px 5px 4px 0 #B4AFAD;
    }
    @media screen and (max-device-width: 1950px) {
        margin-left: 15%;
        width: 70%;
        margin-bottom: 20px;
    }
`;
const Sim: FunctionComponent<ISim> = (prop) => {
    return (
            <SimButton onClick={() => prop.setStatus(prop.simName)}>
                {prop.simName}
            </SimButton>
    )
}

export default Sim;