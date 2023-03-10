import styled from "styled-components";
import colors from "../../../constants/config/theme/colors";
import TextInput from "../../atom/TextInput";

const {bluePrimary,black,gray} = colors
//doc>
export const Container = styled.div`
    display: flex;
    flex-direction: column;
    align-content: center;
    align-items: center;
    padding: 15px;
    height: -webkit-fill-available;
`
//doc<

//header>
export const ToDoListHeaderContainer = styled.div`
    width: 100%;
    height: fit-content;
    display: flex;
    justify-content: space-between;
    align-content: center;
    align-items: center;
    padding-bottom: 15px; 
     &.back {
        justify-content: flex-start;
     }
`
export const ToDoListHeaderText = styled.h1`
   font-family: 'Roboto';
   font-style: normal;
   font-weight: 700;
   font-size: 18px;
   line-height: 21px;
   color: ${bluePrimary};
     &.back {
        color:${black};
     }
`
//header<
//inputs>
export const ToDoListInputsContainer = styled.div`
width: 100%;
height: fit-content;
padding-bottom: 10px;
display: flex;
align-content: center;
align-items: center;
     &.hide{
      display: none;
     }
`
export const ToDoListInputButton = styled.div`
display: flex;
     &.hide{
     display: none;
    }
`
export const ToDoListInputText = styled(TextInput)`
width:100%;
 margin-right:10px;
 color: ${gray};
border:1px solid ${gray};
`
//inputs<
//listcontent>
export const ToDoListListContent = styled.div`
width: 100%;
height: 100%;
display: flex;
     &.hide{
      display: none;
     }
`
//<