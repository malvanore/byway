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
