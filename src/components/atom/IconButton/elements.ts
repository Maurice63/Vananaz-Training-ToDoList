import styled,{css} from "styled-components";
import { IconButtonProps } from "./types";
import { Button } from "antd";

let bMaincolor="";
let bFontColor="";

const iconButton = css`
  ${() => `
  border: 1.5px solid transparent;
  background: ${bMaincolor};
  color: ${bFontColor};
  padding: 2px;
  &:hover {
    border: 1.5px solid white;
    background: ${bMaincolor};
    color: ${bFontColor};
  }
  &:focus {
    color: ${bFontColor};
    background: ${bMaincolor};
    border: 1.5px solid ${bMaincolor};
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
  background: ${bMaincolor};
  color: ${bFontColor};
  padding: 5px;
  box-shadow: 0 3px 6px rgba(0, 0, 0, 0.16), 0 3px 6px rgba(0, 0, 0, 0.23);
  &:hover {
    border: 1.5px solid white;
    background: ${bMaincolor};
    color: ${bFontColor};
  }
  &:focus {
    color: ${bFontColor};
    background: ${bMaincolor};
    border: 1.5px solid ${bMaincolor};
  }
  &:disabled {
    background: gray;
    color: darkgray;
    border: 1.5px solid darkgray;
  }
`};`;

export const IconButtonStyled = styled(Button)`
    ${(props: IconButtonProps) => bMaincolor = props?.color ? props.color: "#FFFFFF00"
    };
    ${(props: IconButtonProps) => bFontColor = props?.fontColor ? props.fontColor: "#FFFFFF"
    };
    ${(props: IconButtonProps) =>
        props.bType === "iconButton" ? iconButton : floatIconButton};
    ${(props: IconButtonProps) =>
        props.bShape === "circle" ? "border-radius: 50%;" : "border-radius: 4px;"};
    ${(props: IconButtonProps) => 
    props.bsize === "small"
        ? "height: auto; font-size: 14px;"
        : props.bsize === "middle"? "height: auto; font-size: 16px;":
        "height: auto; font-size: 18px;"    
      };
    .ant-btn{
        height: 0px
    }
`