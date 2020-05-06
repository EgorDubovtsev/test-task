import React from "react";
import PhoneField from './PhoneField';
import PayField from './PayField';
import {Formik} from "formik";
import * as Yup from 'yup';
import styled, {ThemeProvider} from "styled-components";
import AlertMessage from "./AlertMessage";
import {useHistory} from "react-router-dom";

interface IPayment {
    operator: string
}

const SubmitButton = styled.input`
    float: right;
    margin-top: 100px;
    margin-right: 100px;
    padding: 10px;
    width: 300px;
    border: 0;
    border-radius: 6px;
    letter-spacing: 1px;
    background: #177daa;
    color: #FDFCFC;
    font-family: 'Open Sans Condensed', sans-serif;
    font-weight: bold;
    font-size: 2.3rem;
    :hover{
     box-shadow: 4px 5px 4px 0 #B4AFAD;
    }
    :disabled{
      background: #aeadb4;
    }
    @media screen and (max-device-width: 650px) {
        float: none;
        margin: 0;
        width: 50%;
    }
`;
const StatusMessage = styled.div`
  margin-top: 10px;
  text-align: center;
  background: ${props => props.theme.main};
  width: 100%;
  color: white;
  @media screen and (max-device-width: 650px) {
       font-size:3rem;
    }
`;

const noErrors = {
    main: "transparent"
};
const hasErrors = {
    main: "red"
}
const H1 = styled.h1`
    font-size: 5rem;
    width: 70%;
    padding-left: 15px;
    @media screen and (max-device-width: 650px) {
      width: 100%;
    }
`
const H2 = styled.h2`
    text-align: center;
    width: 30%;
    @media screen and (max-device-width: 650px) {
         margin-top: -50px;
         width: 100%;
         text-align: left;
         padding-left: 80px;
    }
`
const Header = styled.div`
    display: flex;
    @media screen and (max-device-width: 650px) {
         display: flex;
         flex-wrap: wrap;
    }
`
const FieldWrapper = styled.div`
    width: 80%;
    margin-left: 10%;
    margin-top: 10%;
    @media screen and (max-device-width: 650px) {
        flex-wrap: wrap;
        display: flex;
        justify-content: center;
        margin-left: 20%;
    }
`;
const Label = styled.label`
    font-size: 2.5rem;
    justify-content: space-between;
    display: flex;
    margin-bottom: 30px;
    align-items: center;
    @media screen and (max-device-width: 650px) {
      flex-wrap: wrap;
      font-size: 2em;
      margin-bottom: 60px;
    }
`;
const ButtonWrapper = styled.div`
    @media screen and (max-device-width: 650px) {
          margin-top: 40px;
          display: flex;
          justify-content: center;
      }
`;
const Span = styled.span`
      @media screen and (max-device-width: 650px) {
          margin-bottom: 40px;
      }
`;
const Payment: React.FunctionComponent<IPayment> = (prop) => {
    const [operationResult, setOperationResult] = React.useState<string>("")
    const [message, setMessage] = React.useState("")
    const currentOperator: string = localStorage.getItem("operator") || prop.operator;

    function sendToServer() {
        return Math.round(Math.random());
    }

    const max = 1000;
    const min = 1;
    const validationSchema = Yup.object().shape({
        phone: Yup.string()
            .required("Поле должно быть заполнено")
            .test({
                name: "wh",
                exclusive: true,
                params: {max},
                message: 'Номер заполнен не полностью',
                test: value => value.search(/_/) === -1
            }),
        money: Yup.mixed()
            .required()
            .test({
                name: "min",
                exclusive: true,
                params: {min},
                message: 'Сумма должна быть больше ${min}₽',
                test: value => Number.parseFloat(value.replace(" ", "").replace("₽", "")) >= min
            }).test({
                name: "max",
                exclusive: true,
                params: {max},
                message: 'Сумма должна быть не больше ${max}₽',
                test: value => Number.parseFloat(value.replace(" ", "").replace("₽", "")) <= max
            })
    })
    const history = useHistory();
    return (
        <>
            {operationResult !== "" &&
            <AlertMessage isSuccess={operationResult === "success"} message={message}/>}
            <Formik initialValues={{phone: "", money: ""}} validationSchema={validationSchema}
                    onSubmit={(values, {setSubmitting, resetForm}) => {
                        if (sendToServer()) {
                            setOperationResult("success");
                            setMessage("Операция выполнена");
                            setTimeout(history.push, 4000, "/")
                            resetForm();
                        } else {
                            setSubmitting(false);
                            setOperationResult("fail");
                            setMessage("Произошла ошибка! Повторите попытку");
                            resetForm();
                            setTimeout(setOperationResult, 4000, "");
                        }
                    }}>
                {({
                      values,
                      errors,
                      handleChange,
                      handleBlur,
                      touched,
                      handleSubmit,
                      isSubmitting
                  }) => (
                    <form onSubmit={handleSubmit}>
                        <Header>
                            <H1>Перевод средств</H1>
                            <H2>{currentOperator}</H2>
                        </Header>
                        <FieldWrapper>
                            <Label>
                                <Span>Укажите номер телефона:</Span>
                                <PhoneField handleChange={handleChange} handleBlur={handleBlur} values={values}/>
                            </Label>
                            <Label>
                                <Span>Введите сумму(руб.)</Span>
                                <PayField handleChange={handleChange} handleBlur={handleBlur} values={values}/>
                            </Label>
                        </FieldWrapper>
                        <ThemeProvider theme={errors.phone === undefined ? noErrors : hasErrors}>
                            <StatusMessage>
                                {errors.phone}
                            </StatusMessage>
                        </ThemeProvider>
                        <ThemeProvider theme={errors.money === undefined ? noErrors : hasErrors}>
                            <StatusMessage>
                                {errors.money}
                            </StatusMessage>
                        </ThemeProvider>
                        <ButtonWrapper>
                            <SubmitButton type="submit"
                                          disabled={isSubmitting || !touched.phone || values.money === "" || errors.phone !== undefined || errors.money !== undefined}
                                          value="Оплатить" id="sendButton"/>
                        </ButtonWrapper>
                    </form>
                )}
            </Formik>
        </>
    )
}

export default Payment;