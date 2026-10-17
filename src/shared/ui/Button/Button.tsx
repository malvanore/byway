import type { ComponentProps, ReactNode } from 'react'
import cn from 'classnames'

import styles from './Button.module.scss'

type ButtonBorderColor = 'default' | 'kelp' | 'salt' | 'vista'

interface ButtonProps extends Omit<ComponentProps<'button'>, 'color'> {
  color?: ButtonBorderColor
  iconLeft?: ReactNode
  iconRight?: ReactNode
}

export const Button = ({
  color = 'default',
  iconLeft,
  iconRight,
  className,
  type = 'button',
  children,
  ...rest
}: ButtonProps) => {
  return (
    <button className={cn(styles.button, styles[color], className)} type={type} {...rest}>
      {iconLeft && <span className={styles.icon}>{iconLeft}</span>}
      {children}
      {iconRight && <span className={styles.icon}>{iconRight}</span>}
    </button>
  )
}
