import styled from "styled-components";
import img from "../img/bg.jpg";
const Background = styled.div`
    background: url("${img}");
    -webkit-background-size: cover;
    -moz-background-size: cover;
    -o-background-size: cover;
    background-size: cover;
    height: 100%;
    width: 100%;
    z-index: -1;
    position: fixed;
    opacity: 90%;
`;
export default Background;