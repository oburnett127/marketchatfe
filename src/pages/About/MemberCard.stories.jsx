import { Meta, Story } from '@storybook/react';
import MemberCard from './MemberCard';

export default {
  title: 'Market Chat/MemberCard',
  component: MemberCard,
  argTypes: {},
  args: {},
};

const Template = (args) => <MemberCard {...args} />;

export const Default = Template.bind({});
