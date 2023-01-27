import styled from "styled-components";
import colors from "../../../constants/config/theme/colors";


export const DrawerContent = styled.div`
    padding-top: 20px;
    padding-bottom: 20px;
    bottom:0;
    height:auto;
    width: 100%;
    background: ${colors.white};
    display: flex;
    flex-direction: column;
    justify-content: space-around;
`

export const DrawerText = styled.p`
    text-align: center;
    margin: 0px;
    padding: 0px;
    padding-bottom: 15px;
`

export const DrawerButtonsContainer = styled.div`
    display: flex;
    height: fit-content;
    width: 100%;
    flex-direction: row;
    justify-content: space-around;
`

export const Drawercontainer = styled.div`
    height: 100%;
    width: 100%;
    position: fixed;
    bottom: 0;
    top: 0;
    z-index: 9999;
    display: flex;
    flex-direction: column;
        &.hide{
            display: none;
        }
`

export const Drawermask = styled.div`
    height: 100vh;
    width: 100%;
    background: ${colors.black+"1"};
`