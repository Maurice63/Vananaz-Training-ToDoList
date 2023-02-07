import ToDoListTemplate from '.';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import { Provider } from 'react-redux';
import { store } from '../../../redux/store';

export default {
  title: 'Template/ToDoListTemplate',
  component: ToDoListTemplate,
} as ComponentMeta<typeof ToDoListTemplate>;

const Template: ComponentStory<typeof ToDoListTemplate> = (args) => {
return(
    <Provider store={store}>
    <ToDoListTemplate/>
    </Provider>
    )
};

export const Primary = Template.bind({});

Primary.args = {
    
};