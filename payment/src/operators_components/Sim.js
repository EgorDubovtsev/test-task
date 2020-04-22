import React, {useContext} from "react";
import Context from "../context";

function Sim({simName}) {
    const {setStatus} = useContext(Context);
    return (
        <button className="simField btn" onClick={() => setStatus({simName})}>
            {simName}
        </button>
    )
}

export default Sim;