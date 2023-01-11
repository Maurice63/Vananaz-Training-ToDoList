import styled from "styled-components";
import colors from "../../../constants/config/theme/colors";

export const TextLinkStyled = styled.p`
    font-family: 'Roboto';
    font-style: normal;
    font-weight: 400;
    font-size: 14px;
    cursor: pointer;
  color: ${colors.bluePrimary};
  &:hover {
    color: ${colors.bluePrimary};
  }
  &:focus {
    color: ${colors.bluePrimary};
  }
`