import React from "react";
import styled from "styled-components";

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
interface IPaginator {
    changeCurrentPage(page:string):void,
    currentPage:string
}
const Paginator: React.FunctionComponent<IPaginator> = (prop) => {
    return (
        <PageWrapper>
                <PageButton type="button" disabled={prop.currentPage==="operators"} onClick={() => prop.changeCurrentPage("operators")} >1</PageButton>

                <PageButton type="button" disabled={prop.currentPage==="payment"} onClick={() => prop.changeCurrentPage("payment")}>2</PageButton>

        </PageWrapper>
    )
}
export default Paginator;