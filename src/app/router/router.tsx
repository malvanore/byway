import { createBrowserRouter } from 'react-router'

import { HomePage } from '@/pages/HomePage'
import { NotFoundPage } from '@/pages/NotFoundPage'
import { TempPage } from '@/pages/TempPage'

import { BaseLayout } from '../layouts/BaseLayout'

export const router = createBrowserRouter([
  {
    element: <BaseLayout />,
    children: [
      { index: true, element: <HomePage /> },
      ...(import.meta.env.DEV ? [{ path: 'temp', element: <TempPage /> }] : []),
      { path: '*', element: <NotFoundPage /> },
    ],
  },
])
