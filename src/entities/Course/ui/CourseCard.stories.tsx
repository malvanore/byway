import type { Meta, StoryObj } from '@storybook/react-vite'

import { type MockData, MockDataProvider } from '@/shared/mocks'

import type { Course } from '../types'
import { CourseCard } from './CourseCard'

import courseCover from '@/shared/assets/img/cover.jpg'

const DEFAULT_COURSE: Course = {
  id: 0,
  cover: courseCover,
  title: 'Beginner’s Guide to Dungeon',
  author: 'Billy',
  price: 300,
}

const createMockData = (course: Partial<Course> = {}): MockData => ({
  instructors: [],
  categories: [],
  courses: [{ ...DEFAULT_COURSE, ...course }],
})

const meta = {
  title: 'entities/CourseCard',
  component: CourseCard,
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
} satisfies Meta<typeof CourseCard>

export default meta

type Story = StoryObj<typeof meta>

export const Default: Story = {}

export const NotFoundId: Story = {
  args: {
    id: 999,
  },
}

export const BrokenCover: Story = {
  parameters: {
    mockData: createMockData({ cover: '/nope.jpg' }),
  },
}

export const NarrowContainer: Story = {
  parameters: {
    mockData: createMockData({ title: 'looooooooooooooooooooooooommmmngTitle' }),
  },

  decorators: [
    (Story) => (
      <div style={{ width: 280 }}>
        <Story />
      </div>
    ),
  ],
}

export const LargePrice: Story = {
  parameters: {
    mockData: createMockData({ price: 123456789012345 }),
  },
}
