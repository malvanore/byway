import type { ChangeEvent } from 'react'

import styles from './Input.module.scss'

interface InputProps {
  placeholder: string
  defaultValue: string
  onChange: (event: ChangeEvent<HTMLInputElement>) => void
}

export const Input = ({ placeholder, defaultValue, onChange }: InputProps) => {
  return (
    <input
      className={styles.input}
      type="text"
      placeholder={placeholder}
      defaultValue={defaultValue}
      onChange={onChange}
    />
  )
}
