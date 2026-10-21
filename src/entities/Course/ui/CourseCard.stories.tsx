import type { Meta, StoryObj } from '@storybook/react-vite'

import { CourseCard } from './CourseCard'

import RightIcon from '@/shared/assets/img/cover.jpg'

const meta = {
  title: 'entities/CourseCard',
  component: CourseCard,
  tags: ['autodocs'],
  parameters: {
    layout: 'centered',
  },
  args: {
    cover: RightIcon,
    title: 'Beginner’s Guide to Dungeon',
    author: 'Billy',
    price: 300,
  },
} satisfies Meta<typeof CourseCard>

export default meta

type Story = StoryObj<typeof meta>

export const Default: Story = {}

export const BrokenCover: Story = {
  args: {
    cover: '/img/definitely-not-here.jpg',
  },
}

export const LargePrice: Story = {
  args: {
    price: 1234567,
  },
}

export const NarrowContainer: Story = {
  args: {
    title: 'Beginner’s Complete Guide to Product Design and User Research',
  },
  decorators: [
    (Story) => (
      <div style={{ width: 280 }}>
        <Story />
      </div>
    ),
  ],
}
