import type { ComponentProps, ReactNode } from 'react'

import styles from './Button.module.scss'

interface ButtonProps extends ComponentProps<'button'> {
  iconLeft?: ReactNode
  iconRight?: ReactNode
}

export const Button = ({ iconLeft, iconRight, type = 'button', children, ...rest }: ButtonProps) => {
  return (
    <button className={styles.button} type={type} {...rest}>
      {iconLeft && <span className={styles.icon}>{iconLeft}</span>}
      {children}
      {iconRight && <span className={styles.icon}>{iconRight}</span>}
    </button>
  )
}
