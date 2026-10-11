import type { Meta, StoryObj } from '@storybook/react-vite'

import type { Category } from '@/entities/Category'
import { type MockData, MockDataProvider } from '@/shared/mocks'

import { CategoryCard } from './CategoryCard'

import astrologyIcon from '@/shared/assets/icons/astrology.svg'

const DEFAULT_CATEGORY: Category = {
  id: 0,
  iconSrc: astrologyIcon,
  title: 'Astrology',
  coursesCount: 52,
}

const createMockData = (category: Partial<Category> = {}): MockData => ({
  instructors: [],
  categories: [{ ...DEFAULT_CATEGORY, ...category }],
  courses: [],
})

const meta = {
  title: 'entities/CategoryCard',
  component: CategoryCard,
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
} satisfies Meta<typeof CategoryCard>

export default meta

type Story = StoryObj<typeof meta>

export const Default: Story = {}

export const NotFoundId: Story = {
  args: {
    id: 999,
  },
}
export const LongTitle: Story = {
  parameters: {
    mockData: createMockData({ title: 'Astrology Astrology lllll Astrology' }),
  },
}

export const LongWord: Story = {
  parameters: {
    mockData: createMockData({ title: 'Supercalifragilisticexpialidocious' }),
  },
}

export const BrokenIcon: Story = {
  parameters: {
    mockData: createMockData({ iconSrc: '/icons/definitely-not-here.svg' }),
  },
}

export const LargeCount: Story = {
  parameters: {
    mockData: createMockData({ coursesCount: 1234567 }),
  },
}

export const NarrowContainer: Story = {
  parameters: {
    mockData: createMockData({ title: 'Astrology, Esoterics and Ancient Divination Practices' }),
  },
  decorators: [
    (Story) => (
      <div style={{ width: 240 }}>
        <Story />
      </div>
    ),
  ],
}
