import TextInput from ".";
import { SearchOutlined } from "@ant-design/icons";

import { ComponentStory, ComponentMeta } from '@storybook/react';

export default {
  title: 'Atoms/TextInput',
  component: TextInput,
} as ComponentMeta<typeof TextInput>;

const Template: ComponentStory<typeof TextInput> = (args) => <TextInput {...args} />;

export const Primary = Template.bind({});

Primary.args = {
    allowClear: true,
    disabled: false,
    hidden: false,
    placeholder: "Username"
};

export const Withprefix = Template.bind({});

Withprefix.args = {
    allowClear: true,
    disabled: false,
    hidden: false,
    placeholder: "Search...",
    prefix: <SearchOutlined/>
};