import type { ReactNode } from 'react'

import { Heading } from '@/shared/ui/Heading'

import styles from './PromoContent.module.scss'

interface PromoContentProps {
  title: string
  description: string
  action?: ReactNode
}

export const PromoContent = ({ title, description, action }: PromoContentProps) => {
  return (
    <div className={styles.content}>
      <Heading level={2}>{title}</Heading>
      <p className={styles.description}>{description}</p>
      {action}
    </div>
  )
}
