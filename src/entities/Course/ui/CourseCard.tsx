import { useMockData } from '@/shared/mocks'

import type { Course } from '../types'

import styles from './CourseCard.module.scss'

type CourseCardProps = Pick<Course, 'id'>

export const CourseCard = ({ id }: CourseCardProps) => {
  const { courses } = useMockData()
  const course = courses.find((item) => item.id === id)

  if (!course) {
    return null
  }

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
