import type { Meta, StoryObj } from '@storybook/react-vite'

import type { RootState } from '@/app/store'

import type { User } from '../types'
import { UserCard } from './UserCard'

import avatarImage from '@/shared/assets/img/avatar.jpg'

const DEFAULT_USER: User = {
  id: 0,
  avatar: avatarImage,
  name: 'Ronald Richards',
  occupation: 'UI/UX Designer',
}

const createPreloadedState = (user: Partial<User> = {}): Partial<RootState> => ({
  users: {
    list: [{ ...DEFAULT_USER, ...user }],
  },
})

const meta = {
  title: 'entities/UserCard',
  component: UserCard,
  tags: ['autodocs'],
  parameters: {
    layout: 'centered',
    preloadedState: createPreloadedState(),
  },

  args: {
    id: 0,
  },
} satisfies Meta<typeof UserCard>

export default meta

type Story = StoryObj<typeof meta>

export const Default: Story = {}

export const NotFoundId: Story = {
  args: {
    id: 999,
  },
}

export const LongName: Story = {
  parameters: {
    preloadedState: createPreloadedState({ name: 'Richardsffffffffffffffffffff' }),
  },
}

export const LongOccupation: Story = {
  parameters: {
    preloadedState: createPreloadedState({ occupation: 'Designerrrrrrrrrrrrrrrrrrrrr' }),
  },
}

export const BrokenIcon: Story = {
  parameters: {
    preloadedState: createPreloadedState({ avatar: '/ava.svg' }),
  },
}

export const NarrowContainer: Story = {
  parameters: {
    preloadedState: createPreloadedState({ name: 'Subaodpoaisbjpaosijv Hoo' }),
  },
  decorators: [
    (Story) => (
      <div style={{ width: 240 }}>
        <Story />
      </div>
    ),
  ],
}
