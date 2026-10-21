import type { Category } from '../types'

import styles from './CategoryCard.module.scss'

type CategoryCardProps = Pick<Category, 'iconSrc' | 'title' | 'coursesCount'>

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
