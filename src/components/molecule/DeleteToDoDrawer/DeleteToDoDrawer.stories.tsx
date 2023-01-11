import DeleteToDoDrawer from '.';
import { useState } from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

export default {
  title: 'Atoms/DeleteToDoDrawer',
  component: DeleteToDoDrawer,
} as ComponentMeta<typeof DeleteToDoDrawer>;

const Template: ComponentStory<typeof DeleteToDoDrawer> = (args) => {
const [hidden,setHidden] = useState(false);
return(<DeleteToDoDrawer hidden={hidden}
    onYes={()=>{}}
    Hide={()=> {setHidden(true)}} />)
};

export const Primary = Template.bind({});

Primary.args = {
    
};
