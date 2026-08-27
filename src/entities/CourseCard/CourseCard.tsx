import styles from './CourseCard.module.scss'

interface CourseCardProps {
  cover: string
  title: string
  author: string
  price: number
}

export const CourseCard = ({ cover, title, author, price }: CourseCardProps) => {
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
