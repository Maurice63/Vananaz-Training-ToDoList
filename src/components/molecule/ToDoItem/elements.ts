import styled from "styled-components";
import colors from "../../../constants/config/theme/colors";

const {pinkPrimary,gray,lightBluePrimary}=colors 

export const ToDoItemText = styled.p`
font-family: 'Roboto';
font-style: normal;
font-weight: 400;
font-size: 14px;
line-height: 16px;
padding-left: 10px;
color: ${gray};
    &.deletedrawer{
        color: ${pinkPrimary};
    }
    &.popupmenu{
        color: ${lightBluePrimary};
    }
    &.completed{
        color: ${lightBluePrimary};
        text-decoration-line: line-through;
    }
`
export const ToDoItemContainer = styled.div`
    display: flex;
    align-items:center;
    align-content:center;
    height:auto;
    min-height:28px;
    width:100%;
    padding-bottom: 10px;
    &.justified{
        justify-content: space-between;
    }

`;