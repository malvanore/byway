import type { ReactNode } from 'react'

import { Heading } from '@/shared/ui/Heading'

import styles from './HeadingWithButton.module.scss'

interface HeadingWithButtonProps {
  title: string
  action?: ReactNode
}

export const HeadingWithButton = ({ title, action }: HeadingWithButtonProps) => {
  return (
    <div className={styles.topHeader}>
      <Heading level={2}>{title}</Heading>
      {action}
    </div>
  )
}
