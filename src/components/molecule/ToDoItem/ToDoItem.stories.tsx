import ToDoItem from '.';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import { useState } from 'react';

export default {
  title: 'Molecule/ToDoItem',
  component: ToDoItem,
} as ComponentMeta<typeof ToDoItem>;

const Template: ComponentStory<typeof ToDoItem> = (args) => {
    const [argsSelected,setArgsSelected] = useState(args.selected)
    const [argsCompleted,setArgsCompleted] = useState(args.completed)
return(<ToDoItem 
    onSelect={()=>{setArgsSelected(!argsSelected)}}
    selected={argsSelected}
    selectionMode={args.selectionMode}
    value={args.value} 
    onDelete={args.onDelete}
    onTextClick={args.selectionMode?()=>{setArgsCompleted(!argsCompleted)}:()=>{}}
    onUpdate={args.onUpdate}
    deleteDrawer={args.deleteDrawer}
    completed={args.completed}/>)
};

export const Primary = Template.bind({});

Primary.args = {
    
};
