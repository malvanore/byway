import { useAppSelector } from '@/shared/lib/hooks'

import { selectCategoryById } from '../model/categoriesSlice'
import type { Category } from '../types'

import styles from './CategoryCard.module.scss'

type CategoryCardProps = Pick<Category, 'id'>

export const CategoryCard = ({ id }: CategoryCardProps) => {
  const category = useAppSelector((state) => selectCategoryById(state, id))

  if (!category) {
    return null
  }

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
