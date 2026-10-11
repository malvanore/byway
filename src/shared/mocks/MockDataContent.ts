import { createContext } from 'react'

import type { MockData } from './data'

export const MockDataContext = createContext<MockData | null>(null)
