import styled from "styled-components"
import colors from "../../../constants/config/theme/colors"

export const PopUp = styled.div`
    backgroundcolor: ${colors.white};
    position: relative;
    font-color: ${colors.black};
    margin:0px;
    padding: 0px;
    display: flex;
    align-items: flex-start;
`

export const PopUpContainer = styled.div`
    display: flex;
    position: absolute;
    right: 35px;
    z-index:1030;
    color: ${colors.white};
    flex-direction:column;
    align-items:stretch;
    align-content: stretch;
    align-items: stretch;
    background: #FFFFFF;
    box-shadow: 0px 0px 4px rgba(0, 0, 0, 0.25);
    border-radius: 4px;
    padding: 0px;
    width: 115px;
    height: 71px;
    &.hide{
      display:none;
    }
`;

export const PopUpItem = styled.button`
     width: 92px;
     background: ${colors.white};
     border: 1px solid ${colors.white};
     text-align: start;
     padding: 7px 10px;
     margin:0px;
  &:hover {
    backgroundcolor: ${colors.white};
     border: 1px solid ${colors.white};
  }
  &:focus {
    backgroundcolor: ${colors.white};
     border: 1px solid ${colors.white};
  }
  &:disabled {
    backgroundcolor: transparent;
    border: 1px solid transparent;
  }
`;