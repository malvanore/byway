import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'

import { App } from '@/app'

import '@/app/styles/reset.scss'
import '@/app/styles/font.scss'

const rootElement = document.getElementById('root')
if (!rootElement) throw new Error('Root element not found')

createRoot(rootElement).render(
  <StrictMode>
    <App />
  </StrictMode>,
)
