import { createBrowserRouter } from 'react-router'

import { LoginPage } from '@/pages/Auth/'
import { SignupPage } from '@/pages/Auth/'
import { CoursesPage } from '@/pages/CoursesPage'
import { HomePage } from '@/pages/HomePage'
import { NotFoundPage } from '@/pages/NotFoundPage'
import { TempPage } from '@/pages/TempPage'
import { ROUTES_CONST } from '@/shared/config/routes'

import { BaseLayout } from '../layouts/BaseLayout'

export const router = createBrowserRouter([
  {
    element: <BaseLayout />,
    children: [
      { index: true, element: <HomePage /> },
      { path: ROUTES_CONST.courses, element: <CoursesPage /> },
      { path: ROUTES_CONST.login, element: <LoginPage /> },
      { path: ROUTES_CONST.signup, element: <SignupPage /> },
      ...(import.meta.env.DEV ? [{ path: 'temp', element: <TempPage /> }] : []),
      { path: '*', element: <NotFoundPage /> },
    ],
  },
])
