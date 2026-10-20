import { Provider } from 'react-redux'
import type { Decorator } from '@storybook/react-vite'

import { makeStore } from '@/app/store'

export const withStore: Decorator = (Story, { parameters }) => (
  <Provider store={makeStore(parameters.preloadedState)}>
    <Story />
  </Provider>
)
