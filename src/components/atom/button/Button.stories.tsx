import Button from '.';

import { ComponentStory, ComponentMeta } from '@storybook/react';

export default {
  title: 'Atoms/Button',
  component: Button,
} as ComponentMeta<typeof Button>;

const Template: ComponentStory<typeof Button> = (args) => <Button {...args} />;

export const Primary = Template.bind({});

Primary.args = {
    bType: "primary",
    label:'helloWorld'
};

export const Secondary = Template.bind({});

Secondary.args = {
    bType: "secondary",
    label:'helloWorld'
};