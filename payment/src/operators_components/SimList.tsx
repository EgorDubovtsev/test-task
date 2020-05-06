import React from "react";
import Sim from "./Sim";
import IOperator from "./IOperator";
import styled from "styled-components";

interface ISimList {
    setStatus(simName: string): void,

    operators: IOperator[]
}

const Div = styled.div`
    justify-content: space-evenly;
    display: flex;
    padding-left: 10%;
    padding-right: 10%;
    @media screen and (max-device-width: 1950px) {
        display: flex;
        margin-bottom: 20px;
        flex-direction: column;
        flex-wrap: wrap;
        justify-content: flex-end;
    }
`;
const SimList: React.FC<ISimList> = (props) => {
    return (
        <Div>
            {props.operators.map(currentOperator => {
                return <Sim simName={currentOperator.simName} setStatus={props.setStatus}
                            key={currentOperator.simName}/>
            })}
        </Div>
    )
}
export default SimList;
