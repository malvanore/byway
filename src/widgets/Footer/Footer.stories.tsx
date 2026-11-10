import type { Meta, StoryObj } from '@storybook/react-vite'

import { CONTACTS, HELP_LINKS, PROGRAM_LINKS } from './constFooter'
import { Footer } from './Footer'

const meta = {
  title: 'widgets/Footer',
  component: Footer,
  tags: ['autodocs'],
  parameters: {
    layout: 'fullscreen',
  },
  args: {
    helpLinks: HELP_LINKS,
    programLinks: PROGRAM_LINKS,
    contacts: CONTACTS,
  },
} satisfies Meta<typeof Footer>

export default meta

type Story = StoryObj<typeof meta>

export const Default: Story = {}
