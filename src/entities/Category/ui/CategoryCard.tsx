import type { FC } from 'react'

import type { Category } from '../types.ts'

import styles from './CategoryCard.module.scss'

interface CategoryCardProps {
  category: Category
}

export const CategoryCard: FC<CategoryCardProps> = ({ category }) => {
  const { iconSrc, title, coursesCount } = category
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
