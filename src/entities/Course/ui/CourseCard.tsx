import { useAppSelector } from '@/shared/lib/hooks'

import { selectCourseById } from '../model/coursesSlice'
import type { Course } from '../types'

import styles from './CourseCard.module.scss'

type CourseCardProps = Pick<Course, 'id'>

export const CourseCard = ({ id }: CourseCardProps) => {
  const courses = useAppSelector((state) => selectCourseById(state, id))

  if (!courses) {
    return null
  }

  const { cover, title, author, price } = courses
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
