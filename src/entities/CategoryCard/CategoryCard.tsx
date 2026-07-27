import { type ReactNode } from 'react'

import styles from './CategoryCard.module.scss'

interface CategoryCardProps {
  icon: ReactNode
  title: string
  coursesCount: number
}

export const CategoryCard = ({ icon, title, coursesCount }: CategoryCardProps) => {
  return (
    <article className={styles.card}>
      {icon}
      <div className={styles.info}>
        <h3 className={styles.title}>{title}</h3>
        <p className={styles.count}>{coursesCount} courses</p>
      </div>
    </article>
  )
}
