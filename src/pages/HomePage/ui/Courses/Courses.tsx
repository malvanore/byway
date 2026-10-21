import { CourseCard, selectCourses } from '@/entities/Course'
import { useAppSelector } from '@/shared/lib/hooks'
import { Grid } from '@/shared/ui/Grid'
import { TopSection } from '@/shared/ui/TopSection'

export const Courses = () => {
  const courses = useAppSelector(selectCourses)

  return (
    <TopSection title="Top Courses" textButton="See All">
      <Grid>
        {courses.map(({ id }) => (
          <CourseCard key={id} id={id} />
        ))}
      </Grid>
    </TopSection>
  )
}
