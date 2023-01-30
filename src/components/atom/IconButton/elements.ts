import styled,{css} from "styled-components";
import colors from "../../../constants/config/theme/colors";
import { IconButtonProps } from "./types";

const {transparent,white,bluePrimary} = colors 

const iconButton = css`
  border: 1.5px solid transparent;
  padding-right: 10px;
  font-size: 14px;
  background: ${transparent};
  border-radius: 4px;
  &:hover {
    border: 1.5px solid transparent;
  }
  &:focus {
    border: 1.5px solid transparent;
  }
  &:disabled {
    background: gray;
    color: darkgray;
    border: 1.5px solid darkgray;
  }`;

const floatIconButton = css`
  ${() => `
  border: 1.5px solid transparent;
  padding: 5px;
  border: 1.5px solid ${bluePrimary};
  background: ${bluePrimary};
  border-radius: 50%;
  &:hover {
  }
  &:focus {
  }
  &:disabled {
    background: gray;
    color: darkgray;
    border: 1.5px solid darkgray;
  }
`};`;

export const IconButtonStyled = styled.button`
    font-family: 'Roboto';
    font-style: normal;
    font-weight: 400;
    line-height: 28px;
    height: auto; 
    display: flex;
    align-items: center;
    text-align: center;
    color: ${({fontColor}: IconButtonProps) => 
    fontColor ? fontColor: white};
    font-size: ${({bsize}: IconButtonProps) => 
    bsize === "small" ? " 14px;": 
    bsize === "middle"? " 18px;":
                        " 24px;"};
    ${({bType}: IconButtonProps) =>
    bType === "iconButton" ? iconButton : floatIconButton};
`