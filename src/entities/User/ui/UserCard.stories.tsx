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
