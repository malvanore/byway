import type { ReactNode } from 'react'

import { HeadingWithButton } from '@/shared/ui/HeadingWithButton'

import styles from './TopSection.module.scss'

interface TopSectionProps {
  title: string
  action?: ReactNode
  children: ReactNode
}

export const TopSection = ({ title, action, children }: TopSectionProps) => {
  return (
    <section className={styles.topSection}>
      <HeadingWithButton title={title} action={action} />
      <div className={styles.topGrid}>{children}</div>
    </section>
  )
}
