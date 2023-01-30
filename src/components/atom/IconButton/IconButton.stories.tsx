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
    
};

export const backIconButton = Template.bind({});

backIconButton.args = {
    bType: "iconButton",
    children: <LeftOutlined/>,
    fontColor: colors.bluePrimary,
    color: colors.transparent
};

export const floatIconButton = Template.bind({});

floatIconButton.args = {
    bType: "floatIconButton",
    bShape: "circle",
    children: <PlusOutlined/>,
    fontColor: colors.white,
    color: colors.bluePrimary
};