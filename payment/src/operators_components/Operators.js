import React from 'react';
import '../styles/Operators.css';
import '../styles/Payment.css';
import Context from "../context";
import SimList from "../operators_components/SimList";

function Operators({choiceMade}) {
    let [operators, setOperators] = React.useState([
            {simName: "МТС", isSelected: false},
            {simName: "Билайн", isSelected: false},
            {simName: "Мегафон", isSelected: false},
        ]
    );


    function setStatus(simName) {
        choiceMade(simName);
        setOperators(
            operators.map(currentSim => {
                if (currentSim.simName === simName) {
                    currentSim.isSelected = !currentSim.isSelected;
                }
                return currentSim;
            })
        )
    }

    return (
        <div>
            <div className="background"/>
            <div className="bodyWrapper">
                <Context.Provider value={{setStatus}}>
                    <h1 className="operChoice">Выберите оператора</h1>
                    <SimList operators={operators}/>
                </Context.Provider>
            </div>
        </div>
    );
}

export default Operators
