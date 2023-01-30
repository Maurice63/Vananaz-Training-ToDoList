import { createGlobalStyle } from "styled-components";

export const ResetGlobalStyles = createGlobalStyle`
  .ant-message-notice .ant-message-notice-content{
    padding:0px;
  }
  .ant-message {
    position: absolute;
    bottom: 20px !important;
    top: unset !important;
  }
  .ant-popover .ant-popover-inner{
    padding: 0px;
  }
  .ant-popover .ant-popover-arrow{
    display: none;
  }
  
.sb-main-padded .sb-show-main{
    padding:0px;
}

`