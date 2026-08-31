import type { ReactNode } from 'react'

import styles from './Button.module.scss'

type ButtonProps = {
  children: ReactNode
}

export const Button = ({ children }: ButtonProps) => {
  return (
    <button className={styles.button} type="button">
      {children}
    </button>
  )
}
