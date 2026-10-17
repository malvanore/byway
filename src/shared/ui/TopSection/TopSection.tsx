import type { ReactNode } from 'react'

import { SectionHeading } from '@/shared/ui/HeadingWithButton'

import styles from './TopSection.module.scss'

interface TopSectionProps {
  title: string
  textButton: string
  action?: ReactNode
  children: ReactNode
}

export const TopSection = ({ title, textButton, children }: TopSectionProps) => {
  return (
    <section className={styles.topSection}>
      <SectionHeading title={title} textButton={textButton} />
      <div className={styles.topGrid}>{children}</div>
    </section>
  )
}
