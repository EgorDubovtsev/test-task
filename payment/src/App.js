import React from 'react';
import Payment from "./payment/Payment";
import Operators from "./operators_components/Operators";


function App() {
    const [operator, setOperator] = React.useState("");//изменить на ""

    function choiceMade({simName}) {
        setOperator(simName)
    }

    return (
        operator !== "" ? <Payment operator={operator}/> : <Operators choiceMade={choiceMade}/>
    )
}

export default App;
