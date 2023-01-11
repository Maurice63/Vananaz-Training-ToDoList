import styled from "styled-components";
import colors from "../../../constants/config/theme/colors";


export const DrawerContent = styled.div`
    padding: 10px;
    height:auto;
    width: 100%;
    backgraundcolor: ${colors.white};
    display: flex;
    flex-direction: column;
    justify-content: space-around;
`

export const DrawerText = styled.p`
    text-align: center;
    margin: 0px;
    padding: 0px;
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
    z-index:1;
    display: flex;
    flex-direction: column;
        .hide{
            display: none;
        }
`

export const Drawermask = styled.div`
    height: 70%;
    width: 100%;
    backgraundcolor: ${colors.black+"20"};
`