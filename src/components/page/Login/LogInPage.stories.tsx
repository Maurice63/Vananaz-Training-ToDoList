import LogInPage from '.'
import { ResetGlobalStyles } from '../../../constants/config/reset';
import { ComponentStory, ComponentMeta } from '@storybook/react';

export default {
  title: 'Page/LogInPage',
  component: LogInPage,
} as ComponentMeta<typeof LogInPage>;

const Template: ComponentStory<typeof LogInPage> = (args) => {return <><ResetGlobalStyles/><LogInPage {...args}/></>}

export const Primary = Template.bind({});

Primary.args = {
    
};
