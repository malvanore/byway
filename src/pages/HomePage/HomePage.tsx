import { Hero } from './sections/Hero'
import { Stats } from './sections/Stats'
import { Categories } from './sections/Categories'
import { Courses } from './sections/Courses'
import { Instructors } from './sections/Instructors'
import { BecomeInstructor } from './sections/BecomeInstructor'
import { StudentCta } from './sections/StudentCta'

import { Header } from '@/layout/Header'
import { Footer } from '@/layout/Footer'

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
