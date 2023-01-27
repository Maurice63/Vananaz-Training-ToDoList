import colors from '../../../constants/config/theme/colors';
import styled,{ css } from 'styled-components';
import { ButtonProps } from './types';

const {blueSecondary,pinkSecondary,redPrimary,bluePrimary} = colors

let maincolor = "";

const primaryButton = css`
  ${() => `
  background: ${maincolor};
  font-weight: 700;
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
    background: ${blueSecondary};
    color: white;
  }
`};`;

const secondaryButton = css`
  ${() => `
  border: 1.5px solid transparent;
  font-weight: 400;
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
  font-weight: 700;
  background: ${pinkSecondary};
  color: ${maincolor};
  &:hover {
    border: 1.5px solid ${maincolor};
    background: ${pinkSecondary};
    color: ${maincolor};
  }
  &:focus {
    color: ${maincolor};
    background: ${pinkSecondary};
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
    ${({color,preset}: ButtonProps) => maincolor = preset ? redPrimary:
                                                   color ?  color: 
                                                            bluePrimary
    };

font-size: ${({bsize}: ButtonProps) => 
        bsize === "small" ? "14px; height: 32px; ":
        bsize === "middle"? "14px; height: 38px; ":
                                 "14px; height: 44px; "    
    };
    ${({preset,bType}: ButtonProps) =>
      preset? warningButton : 
      bType === "primary" ? primaryButton : secondaryButton};
`;
