import styles from './StatsCard.module.scss'

interface StatsCardProps {
  title: string
  description: string
}

export const StatsCard = ({ title, description }: StatsCardProps) => {
  return (
    <article className={styles.card}>
      <div className={styles.card}>
        <span className={styles.title}>{title}</span>
        <span className={styles.description}>{description}</span>
      </div>
    </article>
  )
}
