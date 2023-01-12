import ToDoItem from '.';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import { useState } from 'react';

export default {
  title: 'Atoms/ToDoItem',
  component: ToDoItem,
} as ComponentMeta<typeof ToDoItem>;

const Template: ComponentStory<typeof ToDoItem> = (args) => {
    const [argsSelected,setArgsSelected] = useState(args.selected)
return(<ToDoItem 
    onSelect={()=>{setArgsSelected(!argsSelected)}}
    selected={argsSelected}
    selectionMode={args.selectionMode}
    value={args.value} 
    onDelete={args.onDelete}
    onUpdate={args.onUpdate}
    deleteDrawer={args.deleteDrawer}
    completed={args.completed}/>)
};

export const Primary = Template.bind({});

Primary.args = {
    
};
