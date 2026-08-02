import styles from './UserCard.module.scss'

interface UserCardProps {
  avatar: string
  name: string
  occupation: string
}

export const UserCard = ({ avatar, name, occupation }: UserCardProps) => {
  return (
    <article className={styles.card}>
      <img className={styles.avatar} src={avatar} alt="" />
      <div className={styles.information}>
        <h3 className={styles.name}>{name}</h3>
        <p className={styles.occupation}>{occupation}</p>
      </div>
    </article>
  )
}
