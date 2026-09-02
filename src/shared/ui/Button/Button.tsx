import type { FC, MouseEvent } from 'react'

import styles from './Button.module.scss'

interface ButtonProps {
  text: string
  onClick: (event: MouseEvent<HTMLButtonElement>) => void
}

export const Button: FC<ButtonProps> = ({ text, onClick }) => {
  return (
    <button className={styles.button} type="button" onClick={onClick}>
      {text}
    </button>
  )
}
