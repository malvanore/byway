import type { ReactNode } from 'react'

import styles from './PromoContent.module.scss'

interface PromoContentProps {
  title: string
  description: string
  action?: ReactNode
  titleTag?: 'h1' | 'h2'
}

export const PromoContent = ({ title, description, action, titleTag: Title = 'h2' }: PromoContentProps) => {
  return (
    <div className={styles.content}>
      <Title className={styles.title}>{title}</Title>
      <p className={styles.description}>{description}</p>
      {action}
    </div>
  )
}
