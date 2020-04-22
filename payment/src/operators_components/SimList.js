import React from "react";
import Sim from "./Sim";

function SimList(props) {
    return(
        <div className="simList">
            {props.operators.map(currentOperator=>{
                return <Sim simName={currentOperator.simName} key={currentOperator.simName}/>
            })}
        </div>
    )
}
export default SimList;
