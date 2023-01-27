import styled from "styled-components";
import colors from "../../../constants/config/theme/colors";

export const Container = styled.div`
    display: flex;
    flex: 1;
    align-items:center;
    align-content:center;
    flex-direction: column;
    height:100%;
    width:100%;
    justify-content: center;
    overflow: hidden;
`;

export const ToDoListContainer = styled.div`
    display: flex;
    align-items:center;
    align-content:center;
    flex-direction: column;
    height:100%;
    width:100%;
    overflow: auto;
`;

export const ToDoListList = styled.div`
    display: flex;
    align-items:center;
    align-content:center;
    flex-direction: column;
    height:100%;
    width:100%;
`;

export const ToDoListdrawers = styled.div`
    display: flex;
    flex-direction: column;
    height:fit-content;
    width:100%;
`;

export const NoToDop = styled.p`
color: ${colors.gray}
font-family: 'Roboto';
font-style: normal;
font-weight: 400;
font-size: 14px;
line-height: 16px;
text-align: center;
padding-bottom: 10px;
`
export const NoToDoContainer = styled.div`
   width: 100%;
   height: fit-content;
   display: flex;
   flex-direction: column;
   justify-content: space-between;
   align-content: center;
   align-items: center;
`

export const NoToDoImg = styled.div`
   max-heigth: 50px;
   max-width: 38px;
   padding-bottom:20px; 
   width: 50%;
   heigth: fit content;
   display: block;
`