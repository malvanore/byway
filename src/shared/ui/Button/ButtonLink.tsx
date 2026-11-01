import type { ReactNode } from 'react'
import type { LinkProps } from 'react-router'
import { Link } from 'react-router'

import styles from './Button.module.scss'

interface ButtonLinkProps extends LinkProps {
  iconLeft?: ReactNode
  iconRight?: ReactNode
}

export const ButtonLink = ({ iconLeft, children, iconRight, ...rest }: ButtonLinkProps) => {
  return (
    <Link className={styles.button} {...rest}>
      {iconLeft && (
        <span className={styles.icon} aria-hidden="true">
          {iconLeft}
        </span>
      )}
      {children}
      {iconRight && (
        <span className={styles.icon} aria-hidden="true">
          {iconRight}
        </span>
      )}
    </Link>
  )
}
