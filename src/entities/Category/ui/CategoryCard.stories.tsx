import type { Meta, StoryObj } from '@storybook/react-vite'

import type { RootState } from '@/app/store'

import type { Category } from '../types'
import { CategoryCard } from './CategoryCard'

import astrologyIcon from '@/shared/assets/icons/astrology.svg'

const DEFAULT_CATEGORY: Category = {
  id: 0,
  iconSrc: astrologyIcon,
  title: 'Astrology',
  coursesCount: 52,
}

const createPreloadedState = (category: Partial<Category> = {}): Partial<RootState> => ({
  categories: {
    list: [{ ...DEFAULT_CATEGORY, ...category }],
  },
})

const meta = {
  title: 'entities/CategoryCard',
  component: CategoryCard,
  tags: ['autodocs'],
  parameters: {
    layout: 'centered',
    preloadedState: createPreloadedState(),
  },
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
    preloadedState: createPreloadedState({ title: 'Astrology Astrology lllll Astrology' }),
  },
}

export const LongWord: Story = {
  parameters: {
    preloadedState: createPreloadedState({ title: 'Supercalifragilisticexpialidocious' }),
  },
}

export const BrokenIcon: Story = {
  parameters: {
    preloadedState: createPreloadedState({ iconSrc: '/icons/definitely-not-here.svg' }),
  },
}

export const LargeCount: Story = {
  parameters: {
    preloadedState: createPreloadedState({ coursesCount: 1234567 }),
  },
}

export const NarrowContainer: Story = {
  parameters: {
    preloadedState: createPreloadedState({ title: 'Astrology, Esoterics and Ancient Divination Practices' }),
  },
  decorators: [
    (Story) => (
      <div style={{ width: 240 }}>
        <Story />
      </div>
    ),
  ],
}
