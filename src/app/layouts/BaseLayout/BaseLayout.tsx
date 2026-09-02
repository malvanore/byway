import type { ReactNode } from 'react'

import { Footer } from '@/widgets/Footer'
import { Header } from '@/widgets/Header'

import styles from './BaseLayout.module.scss'
interface BaseLayoutProps {
  children: ReactNode
}

export const BaseLayout = ({ children }: BaseLayoutProps) => {
  return (
    <div className={styles.layout}>
      <Header />
      <div className={styles.page}>
        <main className={styles.main}>{children}</main>
      </div>
      <Footer />
    </div>
  )
}
