import type { ReactNode } from 'react'
import cn from 'classnames'

import styles from './SplitLayout.module.scss'

type ImagePosition = 'left' | 'right'

interface SplitLayoutProps {
  imageSrc: string
  imagePosition?: ImagePosition
  children: ReactNode
}

export const SplitLayout = ({ imageSrc, imagePosition = 'right', children }: SplitLayoutProps) => {
  return (
    <section className={cn(styles.split, { [styles.imageLeft]: imagePosition === 'left' })}>
      <div className={styles.content}>{children}</div>
      <img className={styles.image} src={imageSrc} alt="" />
    </section>
  )
}
