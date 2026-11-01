import type { ComponentProps } from 'react'
import cn from 'classnames'

import styles from './Grid.module.scss'

export const Grid = ({ className, children, ...rest }: ComponentProps<'div'>) => {
  return (
    <div className={cn(styles.grid, className)} {...rest}>
      {children}
    </div>
  )
}
