import { Hero } from './ui/Hero'
import { Stats } from './ui/Stats'
import { Categories } from './ui/Categories'
import { Courses } from './ui/Courses'
import { Instructors } from './ui/Instructors'
import { BecomeInstructor } from './ui/BecomeInstructor'
import { StudentCta } from './ui/StudentCta'

import { Header } from '@/widgets/Header'
import { Footer } from '@/widgets/Footer'

import styles from './HomePage.module.scss'

export const HomePage = () => {
  return (
    <div className={styles.page}>
      <Header />

      <main className={styles.main}>
        <Hero />
        <Stats />

        <div className={styles.topList}>
          <Categories />
          <Courses />
          <Instructors />
        </div>

        <BecomeInstructor />
        <StudentCta />
      </main>

      <Footer />
    </div>
  )
}
