import React from 'react';
import Payment from "./payment_components/Payment";
import Operators from "./operators_components/Operators";
import styled, {createGlobalStyle} from "styled-components";
import {BrowserRouter, Switch, Route, Redirect} from "react-router-dom";
import Paginator from "./payment_components/Paginator";
import Background from "./operators_components/Background";
import IOperator from "./operators_components/IOperator";

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

const App: React.FunctionComponent = () => {
    const [operator, setOperator] = React.useState<string>(localStorage.getItem("operator") || "");
    let [operatorsList, setOperators] = React.useState<IOperator[]>([
            {simName: "МТС"},
            {simName: "Билайн"},
            {simName: "Мегафон"}
        ]
    );
    const choiceMade = (simName: string) => {
        setOperator(simName);
        localStorage.setItem('operator', simName);
        console.log(localStorage.getItem("operator"))
    }
    let isOperatorValid = false;
    operatorsList.forEach(s => {
            if (s.simName === operator) {
                isOperatorValid = true;
            }
        }
    )
    if (!isOperatorValid) {
        localStorage.setItem("operator", "")
    }
    return (
        <BrowserRouter>
            <Body/>
            <Background/>
            <BodyWrapper>
                <Switch>
                    <Route render={() => <Operators choiceMade={choiceMade} operators={operatorsList}/>} path="/"
                           exact/>
                    <Route render={(props) => operator === "" ? <Redirect to='/'/> : <Payment operator={operator}/>}
                           path="/payment"/>
                </Switch>
                <Paginator/>
            </BodyWrapper>
        </BrowserRouter>
    )
}

export default App;
