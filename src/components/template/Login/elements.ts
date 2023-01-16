import styled from "styled-components";
import colors from "../../../constants/config/theme/colors";
export const LoginContainer = styled.div`
display: flex;
flex-direction: column;

height: 100%;
width: 100%;
padding: 0px;
margin: 0px;
`

export const LoginHeader = styled.div`
height: 40%;
width: 100%;
display: flex;
flex-direction: column;
justify-content: space-around;
`

export const Loginp = styled.p`
font-family: 'Roboto';
font-style: normal;
font-weight: 400;
font-size: 14px;
line-height: 16px;`

export const Loginh1 = styled.h1`
color:${colors.bluePrimary}
font-family: 'Roboto';
font-style: normal;
font-weight: 700;
font-size: 26px;
line-height: 30px;
text-align: center;
`

export const LoginForm = styled.div`
height: 60%;
width: 100%;
display: flex;
flex-direction: column;
justify-content: space-around;
`
