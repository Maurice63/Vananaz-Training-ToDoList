import ToDoList from '.';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import Toast from '../../atom/Toast';
import { Provider } from 'react-redux';
import { store } from '../../../redux/store';

export default {
  title: 'Atoms/ToDoList',
  component: ToDoList,
} as ComponentMeta<typeof ToDoList>;

const Template: ComponentStory<typeof ToDoList> = (args) => {
return(
    <Provider store={store}>
    <ToDoList 
    UpdateCallback={()=>{<><Toast duration={3} message={"To Do Updated"}/></>}}
    selectionMode={args.selectionMode}
    /></Provider>
    )
};

export const Primary = Template.bind({});

Primary.args = {
    
};