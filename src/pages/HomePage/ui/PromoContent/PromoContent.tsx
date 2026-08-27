import { Button } from '@/ui/Button/Button.tsx'

import styles from './PromoContent.module.scss'

interface PromoContentProps {
  title: string
  description: string
  buttonText: string
}

export const PromoContent = ({ title, description, buttonText }: PromoContentProps) => {
  return (
    <div className={styles.content}>
      <h2 className={styles.title}>{title}</h2>
      <p className={styles.description}>{description}</p>
      <Button>{buttonText}</Button>
    </div>
  )
}
