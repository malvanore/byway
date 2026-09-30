import type { Meta, StoryObj } from '@storybook/react-vite'

import { CategoryCard } from './CategoryCard'

import AstrologyIcon from '@/shared/assets/icons/astrology.svg'

const meta = {
  title: 'entities/CategoryCard',
  component: CategoryCard,
  tags: ['autodocs'],
  parameters: {
    layout: 'centered',
  },
  args: {
    iconSrc: AstrologyIcon,
    title: 'Design',
    coursesCount: 42,
  },
} satisfies Meta<typeof CategoryCard>

export default meta

type Story = StoryObj<typeof meta>

export const Default: Story = {}

export const LongTitle: Story = {
  args: {
    title: 'Astrology Astrology lllll Astrology',
  },
}

export const LongWord: Story = {
  args: {
    title: 'Supercalifragilisticexpialidocious',
  },
}

export const BrokenIcon: Story = {
  args: {
    iconSrc: '/icons/definitely-not-here.svg',
  },
}

export const LargeCount: Story = {
  args: {
    coursesCount: 1234567,
  },
}

export const NarrowContainer: Story = {
  args: {
    title: 'Astrology, Esoterics and Ancient Divination Practices',
  },
  decorators: [
    (Story) => (
      <div style={{ width: 240 }}>
        <Story />
      </div>
    ),
  ],
}
