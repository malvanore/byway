import type { Meta, StoryObj } from '@storybook/react-vite'
import { fn } from 'storybook/test'

import { Button } from './Button'

import ChevronRightIcon from '@/shared/assets/icons/chevronRight.svg?react'

const meta = {
  title: 'shared/ui/Button',
  component: Button,
  tags: ['autodocs'],
  parameters: {
    layout: 'centered',
  },
  args: {
    children: 'Label',
    onClick: fn(),
  },
  argTypes: {
    iconLeft: { control: false },
    iconRight: { control: false },
  },
} satisfies Meta<typeof Button>

export default meta

type Story = StoryObj<typeof meta>

export const Default: Story = {}

export const LeftIcon: Story = {
  args: {
    iconLeft: <ChevronRightIcon />,
  },
}

export const RightIcon: Story = {
  args: {
    iconRight: <ChevronRightIcon />,
  },
}

export const TwoIcons: Story = {
  args: {
    iconLeft: <ChevronRightIcon />,
    iconRight: <ChevronRightIcon />,
  },
}

export const AnotherColors: Story = {
  args: {
    color: 'kelp',
  },
}

export const NarrowContainer: Story = {
  args: {
    children: 'llllllllllllllllllllllllll',
  },
  decorators: [
    (Story) => (
      <div style={{ width: 120 }}>
        <Story />
      </div>
    ),
  ],
}
