import { Input } from "antd";
import styled from "styled-components";
import colors from "../../../constants/config/theme/colors";

const {gray,black,white} = colors

export const TextInputStyle = styled(Input)`
    &.ant-input[disabled] {
    color: ${white};
    background-color: ${gray};
    }
    border: 1px solid ${black};
    border-radius: 4px;
`