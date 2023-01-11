import DeleteToDoDrawer from '.';
import { ComponentStory, ComponentMeta } from '@storybook/react';

export default {
  title: 'Atoms/DeleteToDoDrawer',
  component: DeleteToDoDrawer,
} as ComponentMeta<typeof DeleteToDoDrawer>;

const Template: ComponentStory<typeof DeleteToDoDrawer> = (args) => {

return(<DeleteToDoDrawer hidden={args.hidden}
    onYes={()=>{}}
    hide={()=> {args.hidden=false}} />)
};

export const Primary = Template.bind({});

Primary.args = {
    
};
