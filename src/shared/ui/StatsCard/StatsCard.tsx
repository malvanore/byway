import styles from './StatsCard.module.scss'

interface StatsCardProps {
  title: string
  description: string
}

export const StatsCard = ({ title, description }: StatsCardProps) => {
  return (
    <article className={styles.card}>
      <h3 className={styles.title}>{title}</h3>
      <span className={styles.description}>{description}</span>
    </article>
  )
}
