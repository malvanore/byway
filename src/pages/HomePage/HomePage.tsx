import { CoursesSection } from '@/widgets/CoursesSection'
import { InstructorsSection } from '@/widgets/InstructorsSection'

import { BecomeInstructor } from './ui/BecomeInstructor'
import { Categories } from './ui/Categories'
import { Hero } from './ui/Hero'
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
        <CoursesSection />
        <InstructorsSection />
      </div>
      <BecomeInstructor />
      <StudentCta />
    </>
  )
}
