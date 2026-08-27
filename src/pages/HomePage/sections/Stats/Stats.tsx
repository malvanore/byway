import styles from './Stats.module.scss'

import { StatsCard } from '@/entities/StatsCard'

const ACHIEVEMENTS = [
  { id: 0, value: '250+', label: 'Courses by our best mentors' },
  { id: 1, value: '100+', label: 'Experienced mentors' },
  { id: 2, value: '2000+', label: 'Users learning something new' },
]

export const Stats = () => {
  return (
    <section className={styles.section}>
      {ACHIEVEMENTS.map(({ id, value, label }) => (
        <StatsCard key={id} title={value} description={label} />
      ))}
    </section>
  )
}
