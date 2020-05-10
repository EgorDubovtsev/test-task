import React from 'react';
import SimList from "./SimList";
import styled from "styled-components";
import IOperator from "./IOperator";

interface IOperators {
    choiceMade(simName: string): void

    operators: IOperator[]
}

const H1 = styled.h1`
  font-size: 5rem;
  padding-left: 15px;
`;
const Operators: React.FunctionComponent<IOperators> = (props) => {

    const setStatus = (simName: string) => {
        props.choiceMade(simName);
    }

    return (
        <>
            <H1>Выберите оператора</H1>
            <SimList operators={props.operators} setStatus={setStatus}/>
        </>
    );
}


export default Operators
