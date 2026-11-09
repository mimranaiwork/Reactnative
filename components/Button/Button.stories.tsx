import type { Meta, StoryObj } from '@storybook/react-native';
import { fn } from 'storybook/test';

import { Button } from './Button';

const meta = {
  title: 'Components/Button',
  component: Button,
  args: {
    label: 'Button',
    onPress: fn(),
  },
  argTypes: {
    variant: { control: 'select', options: ['primary', 'secondary'] },
    size: { control: 'select', options: ['small', 'medium', 'large'] },
    disabled: { control: 'boolean' },
  },
} satisfies Meta<typeof Button>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Primary: Story = {
  args: { variant: 'primary' },
};

export const Secondary: Story = {
  args: { variant: 'secondary' },
};

export const Large: Story = {
  args: { size: 'large', label: 'Large button' },
};

export const Disabled: Story = {
  args: { disabled: true },
};
