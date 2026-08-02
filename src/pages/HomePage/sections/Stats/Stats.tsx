import styles from './Stats.module.scss'

const ACHIEVEMENTS = [
  { value: '250+', label: 'Courses by our best mentors' },
  { value: '100+', label: 'Experienced mentors' },
  { value: '2000+', label: 'Users learning something new' },
]

export const Stats = () => {
  return (
    <section className={styles.section}>
      {ACHIEVEMENTS.map(({ value, label }) => (
        <div key={value} className={styles.card}>
          <span className={styles.cardTitle}>{value}</span>
          <span className={styles.cardDescription}>{label}</span>
        </div>
      ))}
    </section>
  )
}
