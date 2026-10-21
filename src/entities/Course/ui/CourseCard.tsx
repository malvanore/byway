import type { Course } from '../types'

import styles from './CourseCard.module.scss'

type CourseCardProps = Pick<Course, 'cover' | 'title' | 'author' | 'price'>

export const CourseCard = ({ cover, title, author, price }: CourseCardProps) => {
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
