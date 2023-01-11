import KebabMenu from '.';

import { ComponentStory, ComponentMeta } from '@storybook/react';

export default {
  title: 'Atoms/KebabMenu',
  component: KebabMenu,
} as ComponentMeta<typeof KebabMenu>;

const Template: ComponentStory<typeof KebabMenu> = (args) => <KebabMenu {...args} />;

export const Primary = Template.bind({});

Primary.args = {
};
