import styled from "styled-components";
import colors from "../../../constants/config/theme/colors";

const {bluePrimary,gray} = colors

export const LoginContainer = styled.div`
display: flex;
flex-direction: column;
align-content: center;
align-items: stretch;
height: 100%;
width: 100%;
padding: 0px;
margin: 0px;
`

export const LoginHeader = styled.div`
background: ${bluePrimary+"15"};
height: fit-content;
width: 100%;
min-width: 320px;
min-height: 192px;
padding-top: 25px;
padding-bottom: 30px;
display: flex;
align-content: center;
align-items: center;
flex-direction: column;
justify-content: space-around;
`

export const LoginP = styled.p`
color:${bluePrimary};
font-family: 'Roboto';
font-style: normal;
font-weight: 400;
font-size: 14px;
line-height: 16px;
padding:2px;
margin:5px;
`

export const Loginh1 = styled.h1`
color:${bluePrimary};
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
min-height: 32px;
min-width: 260px;
max-width: 260px;
display: flex;
flex-direction: column;
justify-content: flex-start;
`
export const LoginHeaderimgField = styled.div`
height: fit-content;
width: 30vh;
min-width: 129px;
min-height: 71px;
max-width: 397px;
max-height: 213px;
display: block;
`

export const LoginHeaderTextField = styled.div`
height: fit-content;
width: fit-content;
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
min-height: 32px;
min-width: 260px;
max-width: 260px;
display: flex;
flex-direction: column;
justify-content: flex-start;
`

export const LoginForm = styled.div`
height: fit-content;
width: 100%;
display: flex;
align-content: center;
align-items: center;
flex-direction: column;
justify-content: space-around;
`

export const LoginFormP = styled.p`
color:${gray};
font-family: 'Roboto';
font-style: normal;
line-height: 16px;
padding-top:25px;
padding-bottom: 10px;
margin:5px;
`