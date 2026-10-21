import type { MouseEvent } from 'react'

import styles from './Button.module.scss'

interface ButtonProps {
  text: string
  onClick: (event: MouseEvent<HTMLButtonElement>) => void
}

export const Button = ({ text, onClick }: ButtonProps) => {
  return (
    <button className={styles.button} type="button" onClick={onClick}>
      {text}
    </button>
  )
}
