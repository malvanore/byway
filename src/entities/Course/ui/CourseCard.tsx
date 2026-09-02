import type { FC } from 'react'

import styles from './CourseCard.module.scss'

interface CourseCardProps {
  cover: string
  title: string
  author: string
  price: number
}

export const CourseCard: FC<CourseCardProps> = ({ cover, title, author, price }) => {
  return (
    <article className={styles.card}>
      <img className={styles.cover} src={cover} alt="" />
      <div className={styles.information}>
        <h3 className={styles.title}>{title}</h3>
        <p className={styles.author}>{author}</p>
        <p className={styles.price}>${price}</p>
      </div>
    </article>
  )
}
