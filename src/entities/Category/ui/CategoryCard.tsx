import type { FC } from 'react'

import type { Category } from '../types'

import styles from './CategoryCard.module.scss'

export const CategoryCard: FC<Category> = ({ iconSrc, title, coursesCount }) => {
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
