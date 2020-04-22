import React from "react";
import "../styles/Payment.css";
import PhoneField from './PhoneField';
import PayField from './PayField';


function Payment(prop) {
    return (
        <div>
            <div className="background"/>
            <form className="bodyWrapper">
                <div className="header">
                    <h1>Перевод средств</h1>
                    <h2>{prop.operator}</h2>
                </div>
                <div className="params">
                    <label className="inputElement">
                        Укажите номер телефона: <PhoneField/>
                    </label>
                    <label className="inputElement">
                        Укажите необходимую сумму(Руб.): <PayField/>
                    </label>
                </div>
                <div className="btnWrapper">
                    <button className="btn paybtn">Оплатить</button>
                </div>
            </form>
        </div>
    )
}

export default Payment;