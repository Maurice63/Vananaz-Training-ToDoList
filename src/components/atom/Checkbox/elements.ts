import styled from "styled-components";
import { Checkbox } from "antd";
import colors from "../../../constants/config/theme/colors";

const {greenPrimary} = colors

export const CheckBoxStyle = styled(Checkbox)`
    &.ant-checkbox-wrapper{
        margin:0px;
    }
      & .ant-checkbox-checked .ant-checkbox-inner {
        background-color: ${greenPrimary};
        border-color: ${greenPrimary};
        border-radius: 50%;
      }
    & .ant-checkbox-inner {
        border-radius: 50%;
    }
`;
