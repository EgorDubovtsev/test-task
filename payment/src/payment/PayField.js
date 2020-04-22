import React from "react";

function PayField() {
    function validating(e) {
        let fieldValueBeforeAfterDot = e.target.value.split(".");
        let regExp = /[\s,A-я^!@#$%&*()_/?<>:;"'\-=]/i;

        if (e.target.value.search(regExp) !== -1) {
            e.target.value = e.target.value.slice(0, -1);
        }
        if (Number.parseInt(e.target.value) === 0) {
            e.target.value = 1;
        }
        if (e.target.value > 1000) {
            e.target.value = 1000;
        }

        if (fieldValueBeforeAfterDot[1] !== undefined && fieldValueBeforeAfterDot[1].length > 2) {
            e.target.value = e.target.value.slice(0, -1);
        }
    }

    return (
        <input type="text" className="maskedInput money" id="payField" maxLength="6" onChange={(e) => validating(e)}/>
    )
}

export default PayField;