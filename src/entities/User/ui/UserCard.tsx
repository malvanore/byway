import { useMockData } from '@/shared/mocks'

import type { User } from '../types'

import styles from './UserCard.module.scss'

type UserCardProps = Pick<User, 'id'>

export const UserCard = ({ id }: UserCardProps) => {
  const { instructors } = useMockData()
  const instructor = instructors.find((item) => item.id === id)

  if (!instructor) {
    return null
  }

  const { avatar, name, occupation } = instructor
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
