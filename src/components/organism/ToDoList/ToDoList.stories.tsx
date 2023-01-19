import ToDoList from '.';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import Toast from '../../atom/Toast';
import { Provider } from 'react-redux';
import { store } from '../../../redux/store';

export default {
  title: 'Organism/ToDoList',
  component: ToDoList,
} as ComponentMeta<typeof ToDoList>;

const Template: ComponentStory<typeof ToDoList> = (args) => {
return(
    <div style={{"height":"100vh"}}>
    <Provider store={store}>
    <ToDoList 
    addToDo={args.addToDo}
    searchedTodos={args.searchedTodos}
    UpdateCallback={()=>{<><Toast duration={3} message={"To Do Updated"}/></>}}
    selectionMode={args.selectionMode}
    /></Provider>
    </div>
    )
};

export const Primary = Template.bind({});

Primary.args = {
    
};