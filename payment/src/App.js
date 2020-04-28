import React from 'react';
import Payment from "./payment/Payment";
import Operators from "./operators_components/Operators";


function App() {
    const [operator, setOperator] = React.useState("");

    function choiceMade({simName}) {
        setOperator(simName)
    }

    return (
        operator === "" ? <Operators choiceMade={choiceMade}/> : <Payment operator={operator}/>
    )
}

export default App;
