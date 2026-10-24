import '@/app/styles/reset.scss'
import '@/app/styles/font.scss'

import type { Preview } from '@storybook/react-vite'

import { withStore } from './decorators/withStore'
const preview: Preview = {
  decorators: [withStore],
  parameters: {
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/i,
      },
    },

    a11y: {
      // 'todo' - show a11y violations in the test UI only
      // 'error' - fail CI on a11y violations
      // 'off' - skip a11y checks entirely
      test: 'todo',
    },
  },
}

export default preview
