import type { ComponentProps } from 'react'
import cn from 'classnames'

import styles from './ScrollRow.module.scss'

export const ScrollRow = ({ className, ...rest }: ComponentProps<'div'>) => {
  return <div className={cn(styles.row, className)} {...rest} />
}
