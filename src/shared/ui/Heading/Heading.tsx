import type { ComponentProps } from 'react'
import cn from 'classnames'

import styles from './Heading.module.scss'

type HeadingLevel = 1 | 2 | 3

interface HeadingProps extends ComponentProps<'h1'> {
  level: HeadingLevel
}

export const Heading = ({ level, className, children, ...rest }: HeadingProps) => {
  const Tag = `h${level}` as const

  return (
    <Tag className={cn(styles.heading, styles[`level${level}`], className)} {...rest}>
      {children}
    </Tag>
  )
}
