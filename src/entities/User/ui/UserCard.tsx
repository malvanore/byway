import type { FC } from 'react'

import type { User } from '../types.ts'

import styles from './UserCard.module.scss'

interface UserCardProps {
  user: User
}

export const UserCard: FC<UserCardProps> = ({ user }) => {
  const { avatar, name, occupation } = user
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
