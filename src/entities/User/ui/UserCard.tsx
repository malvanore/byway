import { useAppSelector } from '@/shared/lib/hooks'

import { selectUserById } from '../model/usersSlice'
import type { User } from '../types'

import styles from './UserCard.module.scss'

type UserCardProps = Pick<User, 'id'>

export const UserCard = ({ id }: UserCardProps) => {
  const user = useAppSelector((state) => selectUserById(state, id))

  if (!user) {
    return null
  }

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
