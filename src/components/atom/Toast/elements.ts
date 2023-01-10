import styled,{ createGlobalStyle} from "styled-components";
import colors from "../../../constants/config/theme/colors";

export const MessageContainer = styled.div`
width: fit-content; 
height:auto;
padding: 10px;
border-radius: 8px;
background: ${colors.greenPrimary};

`;

export const GlobalStyle = createGlobalStyle`
    .ant-message-notice .ant-message-notice-content{
    padding:0px;
  }
  .ant-message {
    position: absolute;
    bottom: 20px !important;
    top: unset !important;
  }
`