import styled from "styled-components";
import colors from "../../../constants/config/theme/colors";

  const {bluePrimary}=colors

export const TextLinkStyled = styled.p`
    font-family: 'Roboto';
    font-style: normal;
    font-weight: 400;
    font-size: 14px;
    cursor: pointer;
  color: ${bluePrimary};
  &:hover {
    color: ${bluePrimary};
  }
  &:focus {
    color: ${bluePrimary};
  }
`