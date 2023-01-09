import CheckBox from './CheckBox';
import { ComponentStory, ComponentMeta } from '@storybook/react';

export default {
  title: 'Atoms/CheckBox',
  component: CheckBox,
} as ComponentMeta<typeof CheckBox>;

const Template: ComponentStory<typeof CheckBox> = (args) => <CheckBox {...args} />;

export const Primary = Template.bind({});

Primary.args = {
};
