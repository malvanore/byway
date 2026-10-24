import type { ReactNode } from 'react'

import type { MockData } from './data'
import { MOCK_DATA } from './data'
import { MockDataContext } from './MockDataContent'

interface MockDataProviderProps {
  children: ReactNode
  value?: MockData
}

export const MockDataProvider = ({ children, value = MOCK_DATA }: MockDataProviderProps) => {
  return <MockDataContext.Provider value={value}>{children}</MockDataContext.Provider>
}
