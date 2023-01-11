import TextLink from '.';

import { ComponentStory, ComponentMeta } from '@storybook/react';

export default {
  title: 'Atoms/TextLink',
  component: TextLink,
} as ComponentMeta<typeof TextLink>;

const Template: ComponentStory<typeof TextLink> = (args) => <TextLink {...args} />;

export const Primary = Template.bind({});

Primary.args = {
    onClick: ()=>{console.log("click")},
    text:"Add your first todo"
};
