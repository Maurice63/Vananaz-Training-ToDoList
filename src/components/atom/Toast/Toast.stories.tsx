import Toast from '.';
import { ComponentStory, ComponentMeta } from '@storybook/react';

export default {
  title: 'Atoms/Toast',
  component: Toast,
} as ComponentMeta<typeof Toast>;

const Template: ComponentStory<typeof Toast> = (args) => <Toast {...args} />;

export const Primary = Template.bind({});

Primary.args = {
    message: "hello",
    duration: 20
};