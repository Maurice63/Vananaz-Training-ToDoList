import styled from "styled-components";
import colors from "../../../constants/config/theme/colors";

export const LoginContainer = styled.div`
display: flex;
flex-direction: column;
align-content: center;
align-items: stretch;
height: 100vh;
width: 100%;
padding: 0px;
margin: 0px;
`

export const LoginHeader = styled.div`
background: ${colors.lightBluePrimary};
height: 45%;
width: 100%;
display: flex;
align-content: center;
align-items: center;
flex-direction: column;
justify-content: space-around;
`

export const LoginP = styled.p`
color:${colors.bluePrimary};
font-family: 'Roboto';
font-style: normal;
font-weight: 400;
font-size: 14px;
line-height: 16px;
padding:2px;
margin:5px;
`

export const Loginh1 = styled.h1`
color:${colors.bluePrimary};
font-family: 'Roboto';
font-style: normal;
font-weight: 700;
font-size: 26px;
line-height: 30px;
text-align: center;
padding:2px;
margin:5px;
`
export const LoginTextField = styled.div`
height: fit-content;
width: 80%;
display: flex;
flex-direction: column;
justify-content: flex-start;
`
export const LoginHeaderimgField = styled.div`
height: fit-content;
width: 30vh;
display: block;
`

export const LoginHeaderTextField = styled.div`
height: fit-content;
width: 80%;
display: flex;
align-content: center;
align-items: center;
flex-direction: column;
justify-content: flex-start;
`

export const LoginButtonField = styled.div`
height: fit-content;
width: 80%;
padding-bottom: 10px;
display: flex;
flex-direction: column;
justify-content: flex-start;
`

export const LoginForm = styled.div`
height: 55%;
width: 100%;
display: flex;
align-content: center;
align-items: center;
flex-direction: column;
justify-content: space-around;
`
