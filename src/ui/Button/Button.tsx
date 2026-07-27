import styles from './Button.module.scss'

type ButtonProps = {
  children: string
}

export const Button = ({ children }: ButtonProps) => {
  return (
    <button className={styles.button} type="button">
      {children}
    </button>
  )
}
