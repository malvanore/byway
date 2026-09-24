import type { Meta, StoryObj } from '@storybook/react-vite'

import { UserCard } from './UserCard'

import AvatarUser from '@/shared/assets/img/avatar.jpg'

const meta = {
  title: 'entities/UserCard',
  component: UserCard,
  tags: ['autodocs'],
  parameters: {
    layout: 'centered',
  },
  args: {
    avatar: AvatarUser,
    name: 'Ronald Richards',
    occupation: 'UI/UX Designer',
  },
} satisfies Meta<typeof UserCard>

export default meta

type Story = StoryObj<typeof meta>

export const Default: Story = {}

export const LongTitle: Story = {
  args: {
    name: 'Richardsffffffffffffffffffff',
  },
}

export const LongOccupation: Story = {
  args: {
    occupation: 'Designerrrrrrrrrrrrrrrrrrrrr',
  },
}

export const BrokenIcon: Story = {
  args: {
    avatar: '/icons/definitely-not-here.svg',
  },
}

export const NarrowContainer: Story = {
  args: {
    name: 'Subaodpoaisbjpaosijv Hoo',
  },
  decorators: [
    (Story) => (
      <div style={{ width: 240 }}>
        <Story />
      </div>
    ),
  ],
}
