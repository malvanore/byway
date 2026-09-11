import type { FC } from 'react'

import type { Course } from '../types'

import styles from './CourseCard.module.scss'

interface CourseCardProps {
  course: Course
}

export const CourseCard: FC<CourseCardProps> = ({ course }) => {
  const { cover, title, author, price } = course
  return (
    <article className={styles.card}>
      <img className={styles.cover} src={cover} alt="" />
      <div className={styles.information}>
        <h3 className={styles.title}>{title}</h3>
        <p className={styles.author}>By {author}</p>
        <p className={styles.price}>${price}</p>
      </div>
    </article>
  )
}
