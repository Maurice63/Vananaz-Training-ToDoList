import { Button, Popover } from "antd"
import styled from "styled-components"
import colors from "../../../constants/config/theme/colors"

export const PopUp = styled(Popover)`
    backgroundcolor: ${colors.white};
    border: 1px solid ${colors.black};
    font-color: ${colors.black};
    margin:0px;
    padding: 0px;
    .ant-popover .ant-popover-inner {
        padding: 0px;
    }
`

export const PopUpContainer = styled.div`
    display: flex;
    flex-direction:column;
    align-items:stretch;
    align-content:center;
    padding: 0px;
`;

export const PopUpItem = styled(Button)`
     width:100%;
     backgroundcolor: transparent;
     border: 1px solid transparent;
     radius: 0px;
     font-color: ${colors.black};
     margin:0px;
  &:hover {
    backgroundcolor: transparent;
     border: 1px solid transparent;
  }
  &:focus {
    backgroundcolor: transparent;
    border: 1px solid transparent;
  }
  &:disabled {
    backgroundcolor: transparent;
    border: 1px solid transparent;
  }
`