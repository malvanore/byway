import { CoursesSection } from '@/widgets/CoursesSection'
import { InstructorsSection } from '@/widgets/InstructorsSection'
import { CourseCard, selectCourses } from '@/entities/Course'
import { useAppSelector } from '@/shared/lib/hooks'
import { Grid } from '@/shared/ui/Grid'
import { Heading } from '@/shared/ui/Heading'
import { Input } from '@/shared/ui/Input'

import styles from './CoursesPage.module.scss'

import ChevronRightIcon from '@/shared/assets/icons/chevronRight.svg?react'

export const CoursesPage = () => {
  const courses = useAppSelector(selectCourses)

  return (
    <>
      <div className={styles.wrapper}>
        <Heading level={1}>All Courses</Heading>
        <section className={styles.coursesCatalog}>
          <div className={styles.filters}>
            <Input iconRight={<ChevronRightIcon />} placeholder="Sort By" />
            <Input iconRight={<ChevronRightIcon />} placeholder="Rating" />
            <Input iconRight={<ChevronRightIcon />} placeholder="Price" />
            <Input iconRight={<ChevronRightIcon />} placeholder="Category" />
          </div>
          <div className={styles.coursesGrid}>
            <Grid>
              {courses.map(({ id }) => (
                <CourseCard key={id} id={id} />
              ))}
            </Grid>
          </div>
        </section>
        <InstructorsSection />
        <CoursesSection />
      </div>
    </>
  )
}
