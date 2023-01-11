import styled from "styled-components";
import colors from "../../../constants/config/theme/colors";
import { Button } from "antd";

export const DrawerButton = styled(Button)`${(props) => `
width: 100%;
border: 1.5px solid transparent;
background: ${colors.transparent};
color: ${props.color};
&:hover {
  border: 1.5px solid white;
  color: ${props.color};
}
&:focus {
  color: ${props.color};
  border: 1.5px solid ${props.color};
}
&:disabled {
  background: gray;
  color: darkgray;
  border: 1.5px solid darkgray;
}
`};`;

export const Drawercontainer = styled.div`
    height: fit-content;
    width: 100%;
    position: fixed;
    bottom: 0px;
    padding-bottom: 5px;
    z-index:1;
    display: flex;
    backgraund: ${colors.white};
    flex-direction: column;
        &.hide{
            display: none;
        }
`
