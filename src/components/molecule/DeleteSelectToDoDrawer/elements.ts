import styled from "styled-components";
import colors from "../../../constants/config/theme/colors";
const {transparent,lightgray}=colors


export const DrawerButton = styled.button`${({color}) => `
width: 100%;
height: 100%;
padding-left: 40px;
text-align: start;
border: 1.5px solid transparent;
background: ${transparent};
color: ${color};
&:hover {
  border: 1.5px solid white;
}
&:focus {
  color: ${color};
}
&:disabled {
  background: gray;
  color: darkgray;
  border: 1.5px solid darkgray;
}
`};`;

export const Drawercontainer = styled.div`
    padding: 10px;
    height: 151px;
    width: 100%;
    position: fixed;
    bottom: 0px;
    z-index:1;
    display: flex;
    background: ${lightgray};
    flex-direction: column;
    box-shadow: 0px -4px 4px rgba(0, 0, 0, 0.1);
        &.hide{
            display: none;
        }
`
