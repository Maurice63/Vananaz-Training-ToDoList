import colors from '../../../constants/config/theme/colors';
import button from './button';
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
    background: white;
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

export const ButtonStyle = styled(button)`
font-family: roboto;
border-radius: 4px;
    ${(props: ButtonProps) => maincolor = props.preset === "warning"? colors.redPrimary : props?.color ? props.color: colors.bluePrimary
    };

    ${(props: ButtonProps) => 
        props.size === "small" ? "height: 32px; font-size: 14px":
        props.size === "middle"? "height: 40px; font-size: 16px":
                                 "height: 50px; font-size: 18px"    
    };
    ${(props: ButtonProps) =>
      props.preset === "warning"? warningButton : props.type === "primary" ? primaryButton : secondaryButton};
`;