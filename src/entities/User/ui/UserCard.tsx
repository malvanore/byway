import type { FC } from 'react'

import type { User } from '../types'

import styles from './UserCard.module.scss'

export const UserCard: FC<User> = ({ avatar, name, occupation }) => {
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
