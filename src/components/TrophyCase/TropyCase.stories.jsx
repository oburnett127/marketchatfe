import { Meta, Story } from '@storybook/react';
import TrophyCase from './TrophyCase';

export default {
  title: 'Market Chat/Trophy Case',
  component: TrophyCase,
  argTypes: {},
  args: {},
};

const Template = (args) => <TrophyCase {...args} />;

export const Default = Template.bind({});
