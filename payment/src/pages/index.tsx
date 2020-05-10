import React, {useEffect} from 'react';
import Payment from "./Payment";
import Operators from "./Operators";
import styled, {createGlobalStyle} from "styled-components";
import Paginator from "./Paginator";
import Background from "../operators_components/Background";
import IOperator from "../operators_components/IOperator";
import Head from 'next/head';
import fetch from "isomorphic-unfetch";
import {NextPage} from 'next';
import operators from "../../public/operators-list.json"

const Body = createGlobalStyle`
   body{
        margin: 0;
        font-size: 26px;
        text-transform: uppercase;
        font-family: 'Open Sans Condensed', sans-serif;
    }
`
const BodyWrapper = styled.div`

    font-family: 'Open Sans Condensed', sans-serif;
    border: 1px solid black;
    position: relative;
    background: #FDFCFC;
    margin: 0 auto;
    width: 60%;
    height: 900px;
    justify-content: center;
    min-width: 750px;
    max-width: 1400px;
    border-radius: 8px;
    @media screen and (max-device-width: 650px) {
      height: 1200px;
    }
`;

interface IAppComponentProps {
    operators?: IOperator[];
}

const App: NextPage<IAppComponentProps> = ({operators}) => {

    const [operator, setOperator] = React.useState<string>("");
    const [operatorsList, setOperators] = React.useState<IOperator[]>(operators!);
    const [currentPage, setCurrentPage] = React.useState<string>("");


    const validateCheck = (operator: string) => {
        let isValid = false;
        operatorsList.forEach(s => {
                if (s.simName === operator) {
                    isValid = true;
                }
            }
        )
        return isValid;
    }
    const choiceMade = (simName: string) => {
        setOperator(simName);
        localStorage.setItem('operator', simName);
        setCurrentPage("payment")
    }
    const changePage = (page: string) => {
        setCurrentPage(page);
    }

    return (
        <>
            <Head>
                <link href="https://fonts.googleapis.com/css2?family=Open+Sans+Condensed:wght@300&display=swap"
                      rel="stylesheet"/>
            </Head>
            <Body/>
            <Background/>
            <BodyWrapper>
                {currentPage === "operators" ? <Operators choiceMade={choiceMade} operators={operatorsList}/> :
                    <Payment operator={operator} changeCurrentPage={changePage} validateCheck={validateCheck}/>}
                <Paginator changeCurrentPage={changePage} currentPage={currentPage}/>
            </BodyWrapper>
        </>
    )

}
App.getInitialProps = async ctx => {
    const res = await fetch('http://localhost:3000/operators-list.json')
    const json = await res.json()
    return { operators: json.operators }
}


export default App;
