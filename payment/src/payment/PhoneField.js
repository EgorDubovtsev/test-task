import React from "react";

function PhoneField() {
    let [phone, setPhone] = React.useState(["+7"]);


    function handleChange(e) {
        let currentId = Number.parseInt(e.target.getAttribute("id"));
        let currentMaxLength = e.target.getAttribute("maxlength");
        let currentLength = e.target.value.length;
        let fieldValue = e.target.value;
        let regExp = /[\s,A-я]/i;

        if (fieldValue.search(regExp) !== -1) {
            e.target.value = fieldValue.slice(0, -1);
        } else {
            if (currentLength === Number.parseInt(currentMaxLength)) {
                phone.push(fieldValue);
                setPhone(phone);
                let currentInput = document.getElementById(String(currentId + 1));
                currentInput !== null && currentInput.focus();
            } else if (currentLength === 0) {
                phone.pop(fieldValue);
                setPhone(phone);
                let currentInput = document.getElementById(String(currentId - 1));
                currentInput !== null && currentInput.focus();
            }
        }


    }


    return (
        <div className="maskedInput phone">
            +7(<input type="text" id="1" maxLength="3" onChange={(e) => handleChange(e)} className="num"/>)
            <input type="text" id="2" maxLength="3" onChange={(e) => handleChange(e)} className="num"/>
            -<input type="text" id="3" maxLength="2" onChange={(e) => handleChange(e)} className="num-short"/>
            -<input type="text" id="4" maxLength="2" onChange={(e) => handleChange(e)} className="num-short"/>
        </div>
    )

}

export default PhoneField