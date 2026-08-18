import styles from './Stats.module.scss'

import { StatsCard } from '@/entities/StatsCard'

const ACHIEVEMENTS = [
  { value: '250+', label: 'Courses by our best mentors' },
  { value: '100+', label: 'Experienced mentors' },
  { value: '2000+', label: 'Users learning something new' },
]

export const Stats = () => {
  return (
    <section className={styles.section}>
      {ACHIEVEMENTS.map(({ value, label }) => (
        <StatsCard title={value} description={label} />
      ))}
    </section>
  )
}
