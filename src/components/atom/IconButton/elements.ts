import styled,{css} from "styled-components";
import colors from "../../../constants/config/theme/colors";
import { IconButtonProps } from "./types";

let bMaincolor="";

const {transparent,white} = colors 

const iconButton = css`
  ${() => `
  border: 1.5px solid transparent;
  padding-right: 10px;
  font-size: 14px;
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
  }
`};`;

const floatIconButton = css`
  ${() => `
  border: 1.5px solid transparent;
  padding: 5px;
  box-shadow: 0 3px 6px rgba(0, 0, 0, 0.16), 0 3px 6px rgba(0, 0, 0, 0.23);
  &:hover {
    border: 1.5px solid ${bMaincolor};
  }
  &:focus {
    border: 1.5px solid ${bMaincolor};
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
    background: ${({color}: IconButtonProps) => bMaincolor = color ? color: transparent
    };
    color: ${({fontColor}: IconButtonProps) => fontColor ? fontColor: white
    };
    ${({bType}: IconButtonProps) =>
        bType === "iconButton" ? iconButton : floatIconButton};
    border-radius: ${({bShape}: IconButtonProps) =>
        bShape === "circle" ? " 50%;" : " 4px;"};
    font-size: ${({bsize}: IconButtonProps) => 
    bsize === "small" ? " 14px;": 
    bsize === "middle"? " 18px;":
                              " 24px;"};
`