import Login from '.'
import { ComponentStory, ComponentMeta } from '@storybook/react';

export default {
  title: 'Template/Login',
  component: Login,
} as ComponentMeta<typeof Login>;

const Template: ComponentStory<typeof Login> = (args) => <Login {...args}/>

export const Primary = Template.bind({});

Primary.args = {
    
};
