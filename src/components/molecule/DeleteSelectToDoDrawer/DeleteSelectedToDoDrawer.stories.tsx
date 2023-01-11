import DeleteSelectedToDoDrawer from '.';
import { ComponentStory, ComponentMeta } from '@storybook/react';

export default {
  title: 'Atoms/DeleteSelectedToDoDrawer',
  component: DeleteSelectedToDoDrawer,
} as ComponentMeta<typeof DeleteSelectedToDoDrawer>;

const Template: ComponentStory<typeof DeleteSelectedToDoDrawer> = (args) => {

return(<DeleteSelectedToDoDrawer hidden={args.hidden}
    onCompleteSelected={()=>{}}
    onDeleteSelected={()=>{}}
    onSelectAll={()=>{}}
    hide={()=> {args.hidden=false}} />)
};

export const Primary = Template.bind({});

Primary.args = {
    
};