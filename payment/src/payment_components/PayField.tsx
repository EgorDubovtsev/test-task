import React from "react";
import MaskedInput from "react-text-mask";
import {createNumberMask} from "text-mask-addons/dist/textMaskAddons";
import styled from "styled-components";

interface IPayField {
    values: {
        money: string
    },
    handleChange: (e: React.ChangeEvent) => void,
    handleBlur: (e: React.ChangeEvent) => void
}

const StyledInput = styled.input`
    text-align: right;
    font-family: 'Open Sans Condensed', sans-serif;
    font-size: 2.2rem;
    border: 1px solid #B4AFAD;
    display: flex;
    height: 53px;
    width: 220px;
    margin-left: 20px;
    padding-right: 45px;
    border-radius: 100px;
    :focus {
       outline: 0;
    }
`;

const PayField: React.FunctionComponent<IPayField> = (prop) => {
    const moneyMask = createNumberMask({
        prefix: "",
        suffix: "",
        thousandsSeparatorSymbol: " ",
        allowDecimal: true,
    });

    return (
        <MaskedInput name="money" value={prop.values.money} maxLength={20}
                     placeholderChar={"\u2000"} onChange={prop.handleChange} onBlur={prop.handleBlur}
                     showMask={true} mask={moneyMask}
                     render={(ref, props) => (
                         <StyledInput ref={ref} {...props}/>
                     )}/>
    )
}

export default PayField;