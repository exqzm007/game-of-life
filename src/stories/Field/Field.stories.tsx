import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import Field from '../../components/Field/Field';

export default {
  title: 'Example/Field',
  component: Field,
} as ComponentMeta<typeof Field>;

const Template: ComponentStory<typeof Field> = (args) => <Field {...args} />;

export const Filled = Template.bind({});
Filled.args = {
  rows: 5,
  columns: 5,
};

export const Empty = Template.bind({});
Empty.args = {
  rows: 0,
  columns: 0,
};
