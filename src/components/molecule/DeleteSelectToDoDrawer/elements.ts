import styled from "styled-components";
import colors from "../../../constants/config/theme/colors";

export const DrawerButton = styled.button`${(props) => `
width: 100%;
height: 100%;
padding-left: 40px;
text-align: start;
border: 1.5px solid transparent;
background: ${colors.transparent};
color: ${props.color};
&:hover {
  border: 1.5px solid white;
}
&:focus {
  color: ${props.color};
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
    background: #EEF3F7;
    flex-direction: column;
        &.hide{
            display: none;
        }
`
