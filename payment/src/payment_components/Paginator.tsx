import React, {useState} from "react";
import styled from "styled-components";
import {NavLink} from "react-router-dom";

const PageButton = styled.button`
    text-decoration: none;
    font-size: 1.1rem;
    border-radius: 50%;
    height: 40px;
    width: 40px;
    border: 0;
    background: #177daa;
    display: flex;
    margin: 5px;
    color: aliceblue;
    align-items: center;
    justify-content: center;
    box-shadow: 0 0 10px rgba(0,0,0,0.5);
    :disabled{
        background: #aeadb4;
    }
    :hover{
        transition: 0.5s;
        transform: scale(1.2);
        animation: pageScope 0.5s ease-in-out forwards;
    }
    :focus{
        outline: none;
    }
    @keyframes pageScope{
        from{
            margin-top: 5px;
        }
        to{
            margin-top:-3px;
        }
    }
    @media screen and (max-device-width: 650px) {
        height: 60px;
        width: 60px;
        font-size: 2rem;
        margin-bottom: 30px;
    }
    `;
const PageWrapper = styled.div`
    width: 100%;
    position: absolute;
    bottom: 30px;
    justify-content: center;
    display: flex;
    
`
const Paginator: React.FunctionComponent = () => {
    const [disabledButton, setDisabledButton] = useState<string>("1")
    return (
        <PageWrapper>
            <NavLink to="/" style={{textDecoration: "none"}} onClick={() => setDisabledButton("1")}>
                <PageButton type="button" disabled={disabledButton === "1"}>1</PageButton>
            </NavLink>
            <NavLink to="/payment" style={{textDecoration: "none"}} onClick={() => setDisabledButton("2")}>
                <PageButton type="button" disabled={disabledButton === "2"}>2</PageButton>
            </NavLink>
        </PageWrapper>
    )
}
export default Paginator;