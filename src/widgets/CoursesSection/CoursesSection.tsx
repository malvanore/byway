import { CourseCard, selectCourses } from '@/entities/Course'
import { ROUTES_CONST } from '@/shared/config/routes'
import { useAppSelector } from '@/shared/lib/hooks'
import { ButtonLink } from '@/shared/ui/Button'
import { Grid } from '@/shared/ui/Grid'
import { TopSection } from '@/shared/ui/TopSection'

import ChevronRightIcon from '@/shared/assets/icons/chevronRight.svg?react'

export const CoursesSection = () => {
  const courses = useAppSelector(selectCourses)

  return (
    <TopSection
      title="Top Courses"
      action={
        <ButtonLink to={ROUTES_CONST.courses} iconRight={<ChevronRightIcon />}>
          See All
        </ButtonLink>
      }
    >
      <Grid>
        {courses.map(({ id }) => (
          <CourseCard key={id} id={id} />
        ))}
      </Grid>
    </TopSection>
  )
}
