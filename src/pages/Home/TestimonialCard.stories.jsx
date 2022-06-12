import { Meta, Story } from '@storybook/react';
import TestimonialCard from './TestimonialCard';

export default {
  title: 'Market Chat/TestimonialCard',
  component: TestimonialCard,
  argTypes: {},
  args: {},
};

const Template = (args) => <TestimonialCard {...args} />;

export const Default = Template.bind({});
