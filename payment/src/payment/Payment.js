import React from "react";
import "../styles/Payment.css";
import PhoneField from './PhoneField';
import PayField from './PayField';
import showResultOperationWindow from "./Animation";

function Payment(prop) {
    let [phone, setPhone] = React.useState(["+7"]);
    const [operationResult, setOperationResult] = React.useState(null)
    const [alertMessage, setAlertMessage] = React.useState("")

    function sendToServer() {
        return Math.round(Math.random());
    }

    function handleChangeNumber(e) {
        let currentId = Number.parseInt(e.target.getAttribute("id"));
        let currentMaxLength = Number.parseInt(e.target.getAttribute("maxlength"));
        let currentLength = e.target.value.length;
        let fieldValue = e.target.value;
        let bannedSymbols = /[\s\D,A-я^!@#$%&*()_/?<>:;"'\-=]/i;
        let nextInput = document.getElementById(String(currentId + 1));
        let prevInput = document.getElementById(String(currentId - 1));

        if (fieldValue.search(bannedSymbols) !== -1) {
            e.target.value = fieldValue.slice(0, -1);
        }
        if (currentLength === currentMaxLength) {
            phone.push(fieldValue);
            setPhone(phone);
            nextInput !== null && nextInput.focus();
        } else if (currentLength === 0) {
            phone.pop();
            setPhone(phone);
            prevInput !== null && prevInput.focus();
        }

    }

    function submitHandler(event) {
        let money = document.getElementById("payField").value;
        let number = phone.join("");

        event.preventDefault();
        document.getElementById('sendButton').setAttribute('disabled', "disabled");
        if (number.length !== 12 || money === "") {
            setOperationResult("fail")
            setAlertMessage("Произошла ошибка! Данные введены некорректно.")
            setPhone(["+7"]);
            document.querySelectorAll('input.clean').forEach(el => el.value = "");
            setTimeout(setOperationResult, 2000, null);
        } else {
            if (sendToServer()) {
                setOperationResult("success");
                setAlertMessage("Оплата прошла успешно!");
                setTimeout("window.location.replace('/')", 1500);
            } else {
                setOperationResult("fail")
                setAlertMessage("Произошла ошибка! Повторите операцию.")
                setTimeout(setOperationResult, 1500, null);
            }
        }
        showResultOperationWindow();
        setTimeout(() => document.getElementById('sendButton').removeAttribute('disabled'), 1500);

    }

    return (
        <div>
            <div className="background"/>
            {operationResult !== null &&
            <div className={operationResult} id="resultOperationWindow">{alertMessage}</div>}
            <form className="bodyWrapper" id="form" onSubmit={(e) => submitHandler(e)}>
                <div className="header">
                    <h1>Перевод средств</h1>
                    <h2>{prop.operator}</h2>
                </div>
                <div className="params">
                    <label className="inputElement">
                        Укажите номер телефона: <PhoneField handleChangeNumber={handleChangeNumber}/>
                    </label>
                    <label className="inputElement">
                        Укажите необходимую сумму(Руб.): <PayField/>
                    </label>
                </div>
                <div className="btnWrapper">
                    <button className="btn paybtn" id="sendButton">Оплатить</button>
                </div>
            </form>
        </div>
    )
}

export default Payment;