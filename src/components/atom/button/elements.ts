import colors from '../../../constants/config/theme/colors';
import { Button } from "antd";
import styled,{ css } from 'styled-components';
import { ButtonProps } from './types';

let maincolor = "";

const primaryButton = css`
  ${() => `
  background: ${maincolor};
  color: "white";
  border: 1.5px solid ${maincolor};
  &:hover {
    border: 1.5px solid ${maincolor};
    background: ${maincolor+"80"};
    color: ${maincolor};
  }
  &:focus {
    border: 1.5px solid ${maincolor};
    background: ${maincolor+"80"};
    color: ${maincolor};
  }
  &:disabled {
    background: ${maincolor+"80"};
    color: black;
  }
`};`;

const secondaryButton = css`
  ${() => `
  border: 1.5px solid transparent;
  background: ${maincolor+"80"};
  color: ${maincolor};
  &:hover {
    border: 1.5px solid white;
    background: ${maincolor};
    color: white;
  }
  &:focus {
    color: white;
    background ${maincolor};
    border: 1.5px solid ${maincolor};
  }
  &:disabled {
    background: gray;
    color: darkgray;
    border: 1.5px solid darkgray;
  }
`};`;

const warningButton = css`
  ${() => `
  border: 1.5px solid transparent;
  background: ${maincolor+"80"};
  color: ${maincolor};
  &:hover {
    border: 1.5px solid white;
    background: ${maincolor};
    color: white;
  }
  &:focus {
    color: white;
    background ${maincolor};
    border: 1.5px solid ${maincolor};
  }
  &:disabled {
    background: gray;
    color: darkgray;
    border: 1.5px solid darkgray;
  }
`};`;

export const ButtonStyle = styled(Button)`
font-family: roboto;
border-radius: 4px;
    ${(props: ButtonProps) => maincolor = props.preset ? colors.redPrimary : props?.color ? props.color: colors.bluePrimary
    };

    ${(props: ButtonProps) => 
        props.bsize === "small" ? "height: 32px; font-size: 14px":
        props.bsize === "middle"? "height: 40px; font-size: 16px":
                                 "height: 50px; font-size: 18px"    
    };
    ${(props: ButtonProps) =>
      props.preset? warningButton : props.bType === "primary" ? primaryButton : secondaryButton};
`;