import { CourseCard } from '@/entities/Course'
import { useMockData } from '@/shared/mocks'
import { Grid } from '@/shared/ui/Grid'
import { TopSection } from '@/shared/ui/TopSection'

export const Courses = () => {
  const { courses } = useMockData()

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
