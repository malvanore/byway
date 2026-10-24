import type { ComponentProps, ReactNode } from 'react'
import cn from 'classnames'

import styles from './Input.module.scss'

interface InputProps extends ComponentProps<'input'> {
  iconLeft?: ReactNode
  iconRight?: ReactNode
}

export const Input = ({ iconLeft, iconRight, className, ...rest }: InputProps) => {
  return (
    <div className={cn(styles.wrapper, className)}>
      {iconLeft && <span className={styles.icon}>{iconLeft}</span>}
      <input className={styles.input} {...rest} />
      {iconRight && <span className={styles.icon}>{iconRight}</span>}
    </div>
  )
}
