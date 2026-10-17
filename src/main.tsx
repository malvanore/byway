import '@/app/styles/reset.scss'
import '@/app/styles/font.scss'

import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'

import { App } from '@/app'
import { MockDataProvider } from '@/shared/mocks'

const rootElement = document.getElementById('root')
if (!rootElement) throw new Error('Root element not found')

createRoot(rootElement).render(
  <StrictMode>
    <MockDataProvider>
      <App />
    </MockDataProvider>
  </StrictMode>,
)
