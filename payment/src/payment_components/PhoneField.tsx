import React from "react";
import MaskedInput from "react-text-mask";
import styled from "styled-components";


interface IPhoneField {
    handleChange: (e: React.ChangeEvent) => void,
    handleBlur: (e: React.ChangeEvent) => void,
    values: {
        phone: string
    }
}

const StyledInput = styled.input`
    font-family: 'Open Sans Condensed', sans-serif;
    font-size: 2.2rem;
    text-align: center;
    border: 1px solid #B4AFAD;
    display: flex;
    height: 53px;
    width: 240px;
    margin-left: 20px;
    padding-left: 10px;
    padding-right: 17px;
    border-radius: 100px;
    :focus {
    outline: 0;
}
`;


const PhoneField: React.FunctionComponent<IPhoneField> = (prop) => {
    return (
        <MaskedInput
            name="phone" value={prop.values.phone} onChange={prop.handleChange}
            onBlur={prop.handleBlur}
            showMask={true}
            mask={["+", "7", '(', /[1-9]/, /\d/, /\d/, ')', ' ', /\d/, /\d/, /\d/, '-', /\d/, /\d/, "-", /\d/, /\d/]}
            render={(ref, props) => (
                <StyledInput ref={ref} {...props}/>
            )}/>
    )
}

export default PhoneField