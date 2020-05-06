import React from "react";
import styled from "styled-components";

interface IAlertMessage {
    isSuccess: boolean,
    message: string
}

const AlertField = styled.div`
    position: absolute;
    top:0;
    background:${props => props.theme.main};
    width: 100%;
    opacity: 0.7;
    color: aliceblue;
    font-size: 4rem;
    text-align: center;
    animation: ${props => props.theme.animation};
    @keyframes slide{
        from  {top:-200px}
        to    {top:0}
    }
`;
AlertField.defaultProps = {
    theme: "transparent"
}
;
const AlertMessage: React.FunctionComponent<IAlertMessage> = (props) => {
    return (
        <AlertField theme={props.isSuccess ? {main: "#20a802", animation: "slide 2s ease-in-out 1"} : {
            main: "#ba0900",
            animation: "slide 2s ease-in-out 1"
        }}>
            {props.message}
        </AlertField>
    )
}
export default AlertMessage;