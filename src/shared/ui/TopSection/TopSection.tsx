import type { ReactNode } from 'react'

import styles from './TopSection.module.scss'

interface TopSectionProps {
  title: string
  action?: ReactNode
  children: ReactNode
}

export const TopSection = ({ title, action, children }: TopSectionProps) => {
  return (
    <section className={styles.topSection}>
      <div className={styles.topHeader}>
        <h2 className={styles.topTitle}>{title}</h2>
        {action}
      </div>
      <div className={styles.topGrid}>{children}</div>
    </section>
  )
}
