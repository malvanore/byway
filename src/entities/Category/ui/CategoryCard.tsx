import styles from './CategoryCard.module.scss'

interface CategoryCardProps {
  iconSrc: string
  title: string
  coursesCount: number
}

export const CategoryCard = ({ iconSrc, title, coursesCount }: CategoryCardProps) => {
  return (
    <article className={styles.card}>
      <img src={iconSrc} alt="" className={styles.icon} />
      <div className={styles.info}>
        <h3 className={styles.title}>{title}</h3>
        <p className={styles.count}>{coursesCount} courses</p>
      </div>
    </article>
  )
}
