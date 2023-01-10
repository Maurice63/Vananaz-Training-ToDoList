import IconButton from '.';
import { LeftOutlined, LogoutOutlined, PlusOutlined } from "@ant-design/icons";
import { ComponentStory, ComponentMeta } from '@storybook/react';
import colors from '../../../constants/config/theme/colors';

export default {
  title: 'Atoms/IconButton',
  component: IconButton,
} as ComponentMeta<typeof IconButton>;

const Template: ComponentStory<typeof IconButton> = (args) => <IconButton {...args} />;

export const logoutIconButton = Template.bind({});

logoutIconButton.args = {
    bType: "iconButton",
    children: <LogoutOutlined/>,
    fontColor: colors.bluePrimary,
};

export const backIconButton = Template.bind({});

backIconButton.args = {
    bType: "iconButton",
    children: <LeftOutlined/>,
    fontColor: colors.bluePrimary,
};

export const floatIconButton = Template.bind({});

floatIconButton.args = {
    bType: "floatIconButton",
    children: <PlusOutlined/>,
    color: colors.bluePrimary
};