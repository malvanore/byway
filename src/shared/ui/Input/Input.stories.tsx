import type { Meta, StoryObj } from '@storybook/react-vite'

import { Input } from './Input'

import GraphIcon from '@/shared/assets/icons/graph.svg?react'

const meta = {
  title: 'shared/ui/Input',
  component: Input,
  tags: ['autodocs'],
  argTypes: {
    iconLeft: { control: false },
    iconRight: { control: false },
  },
} satisfies Meta<typeof Input>

export default meta

type Story = StoryObj<typeof meta>

export const LeftIcon: Story = {
  args: {
    iconLeft: <GraphIcon />,
  },
}

export const RightIcon: Story = {
  args: {
    iconRight: <GraphIcon />,
  },
}

export const TwoIcons: Story = {
  args: {
    iconLeft: <GraphIcon />,
    iconRight: <GraphIcon />,
  },
}

export const Default: Story = {}
