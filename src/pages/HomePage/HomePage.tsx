import { BecomeInstructor } from './ui/BecomeInstructor'
import { Categories } from './ui/Categories'
import { Courses } from './ui/Courses'
import { Hero } from './ui/Hero'
import { Instructors } from './ui/Instructors'
import { Stats } from './ui/Stats'
import { StudentCta } from './ui/StudentCta'

import styles from './HomePage.module.scss'

export const HomePage = () => {
  return (
    <>
      <Hero />
      <Stats />
      <div className={styles.topSectionLists}>
        <Categories />
        <Courses />
        <Instructors />
      </div>
      <BecomeInstructor />
      <StudentCta />
    </>
  )
}
