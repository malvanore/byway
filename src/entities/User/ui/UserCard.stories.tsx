import type { Meta, StoryObj } from '@storybook/react-vite'

import type { User } from '@/entities/User'
import { type MockData, MockDataProvider } from '@/shared/mocks'

import { UserCard } from './UserCard'

import avatarImage from '@/shared/assets/img/avatar.jpg'

const DEFAULT_USER: User = {
  id: 0,
  avatar: avatarImage,
  name: 'Ronald Richards',
  occupation: 'UI/UX Designer',
}

const createMockData = (instructors: Partial<User> = {}): MockData => ({
  instructors: [{ ...DEFAULT_USER, ...instructors }],
  categories: [],
  courses: [],
})

const meta = {
  title: 'entities/UserCard',
  component: UserCard,
  tags: ['autodocs'],
  parameters: {
    layout: 'centered',
    mockData: createMockData(),
  },
  decorators: [
    (Story, { parameters }) => (
      <MockDataProvider value={parameters.mockData}>
        <Story />
      </MockDataProvider>
    ),
  ],
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
    mockData: createMockData({ name: 'Richardsffffffffffffffffffff' }),
  },
}

export const LongOccupation: Story = {
  parameters: {
    mockData: createMockData({ occupation: 'Designerrrrrrrrrrrrrrrrrrrrr' }),
  },
}

export const BrokenIcon: Story = {
  parameters: {
    mockData: createMockData({ avatar: '/ava.svg' }),
  },
}

export const NarrowContainer: Story = {
  parameters: {
    mockData: createMockData({ name: 'Subaodpoaisbjpaosijv Hoo' }),
  },
  decorators: [
    (Story) => (
      <div style={{ width: 240 }}>
        <Story />
      </div>
    ),
  ],
}
