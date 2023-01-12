import styled from "styled-components";
import colors from "../../../constants/config/theme/colors";


export const ToDoItemText = styled.p`
font-family: 'Roboto';
font-style: normal;
font-weight: 400;
font-size: 14px;
line-height: 16px;
padding-left: 10px;
color: ${colors.gray};
    &.deletedrawer{
        color: ${colors.pinkPrimary};
    }
    &.popupmenu{
        color: ${colors.lightBluePrimary};
    }
    &.completed{
        color: ${colors.lightBluePrimary};
        text-decoration-line: line-through;
    }
`
export const ToDoItemContainer = styled.div`
    display: flex;
    align-items:center;
    align-content:center;
    padding-left:10px;
    padding-right:10px;
    height:auto;
    width:100%;
    &.justified{
        justify-content: space-between;
    }

`;