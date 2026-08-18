import type { ReactNode } from 'react'

import { Button } from '@/ui/Button/Button.tsx'

import styles from './TopSection.module.scss'

interface TopSectionProps {
  title: string
  children: ReactNode
}

export const TopSection = ({ title, children }: TopSectionProps) => {
  return (
    <section className={styles.topSection}>
      <div className={styles.topHeader}>
        <h2 className={styles.topTitle}>{title}</h2>
        <Button>See all</Button>
      </div>
      <div className={styles.topGrid}>{children}</div>
    </section>
  )
}
