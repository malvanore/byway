import type { ReactNode } from 'react'

import { Button } from '@/ui/Button/Button'

import styles from './TopSection.module.scss'

interface TopSectionProps {
  title: string
  children: ReactNode
}

export const TopSection = ({ title, children }: TopSectionProps) => {
  return (
    <section className={styles.topSection}>
      <div className={styles.top}>
        <div className={styles.topHeader}>
          <h1 className={styles.topTitle}>{title}</h1>
          <Button>See all</Button>
        </div>
        <div className={styles.topGrid}>{children}</div>
      </div>
    </section>
  )
}
