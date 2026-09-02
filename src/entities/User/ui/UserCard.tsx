import type { FC } from 'react'

import styles from './UserCard.module.scss'

interface UserCardProps {
  avatar: string
  name: string
  occupation: string
}

export const UserCard: FC<UserCardProps> = ({ avatar, name, occupation }) => {
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
