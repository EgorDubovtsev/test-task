import React from "react";

function PayField() {
    function validating(e) {
        let fieldValueBeforeAfterDot = e.target.value.split(".");
        let bannedSymbols = /[\sA-я^!@#$%&*()_/?<>:;,"'\-=]/i;
        let bannedSymbolsWithoutWhitespace = /[A-я^!@#$%&*()_/?<>:;,"'\-=]/i;
        let dotDuplicate = /[\D][\d]*[\D]/;
        let dotInStart = /[\d][\D][\d][\s][\d][\d]/;

        e.target.value = e.target.value.replace(bannedSymbols, "");
        if (e.target.value.search(dotDuplicate) !== -1) {
            e.target.value = e.target.value.replace(dotDuplicate, ".");
        }

        if (Number.parseInt(e.target.value) === 0) {
            e.target.value = 1;
        }

        if (Number.parseInt(e.target.value.trim()) >= 1000) {
            e.target.value = "1 000";
        } else {
            e.target.value.replace(/\s/, "");
        }
        if (fieldValueBeforeAfterDot[1] !== undefined) {

            if (fieldValueBeforeAfterDot[0] === "") {
                e.target.value = "1." + fieldValueBeforeAfterDot[1];
            }
            if (fieldValueBeforeAfterDot[1].length > 2) {
                e.target.value = e.target.value.slice(0, -1);
            }
        }
        if (e.target.value.search(dotInStart) !== -1) {
            e.target.value = 1.10;
        }

        e.target.value = e.target.value.replace(bannedSymbolsWithoutWhitespace, "");
    }

    return (
        <input type="text" name="money" className="maskedInput money clean" id="payField"
               onChange={(e) => validating(e)}/>
    )
}

export default PayField;