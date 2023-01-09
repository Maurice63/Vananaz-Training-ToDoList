import styled from "styled-components";
import { Checkbox } from "antd";

export const CheckBoxStyle = styled(Checkbox)`
    &.ant-checkbox-wrapper{
        margin:0px;
    }
      & .ant-checkbox-checked .ant-checkbox-inner {
        background-color: #6FCF97;
        border-color: #6FCF97;
        border-radius: 50%;
      }
    & .ant-checkbox-inner {
        border-radius: 50%;
    }
`;
