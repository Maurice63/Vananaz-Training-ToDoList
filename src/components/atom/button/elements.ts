import colors from '../../../constants/config/theme/colors';
import styled,{ css } from 'styled-components';
import { ButtonProps } from './types';

let maincolor = "";

const primaryButton = css`
  ${() => `
  background: ${maincolor};
  color: white;
  border: 1.5px solid ${maincolor};
  &:hover {
    border: 1.5px solid ${maincolor};
    background: ${maincolor};
    color: white;
  }
  &:focus {
    border: 1.5px solid ${maincolor+"80"};
    background: ${maincolor};
    color: white;
  }
  &:disabled {
    background: ${colors.blueSecondary};
    color: white;
  }
`};`;

const secondaryButton = css`
  ${() => `
  border: 1.5px solid transparent;
  background: ${maincolor+"15"};
  color: ${maincolor};
  &:hover {
    background: ${maincolor+"15"};
    color: ${maincolor};
    border: 1.5px solid ${maincolor};
  }
  &:focus {
    background: ${maincolor+"15"};
    color: ${maincolor};
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
  background: ${colors.pinkSecondary};
  color: ${maincolor};
  &:hover {
    border: 1.5px solid ${maincolor};
    background: ${colors.pinkSecondary};
    color: ${maincolor};
  }
  &:focus {
    color: ${maincolor};
    background: ${colors.pinkSecondary};
    border: 1.5px solid ${maincolor};
  }
  &:disabled {
    background: gray;
    color: darkgray;
    border: 1.5px solid darkgray;
  }
`};`;

export const ButtonStyle = styled.button`
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
