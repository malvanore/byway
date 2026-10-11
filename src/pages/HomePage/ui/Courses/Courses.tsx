import { CourseCard } from '@/entities/Course'
import { useMockData } from '@/shared/mocks'
import { Button } from '@/shared/ui/Button'
import { TopSection } from '@/shared/ui/TopSection'

export const Courses = () => {
  const { courses } = useMockData()

  return (
    <TopSection
      title="Top Courses"
      action={<Button text="See all" onClick={() => alert('переход на стр с курсами')} />}
    >
      {courses.map(({ id }) => (
        <CourseCard key={id} id={id} />
      ))}
    </TopSection>
  )
}
