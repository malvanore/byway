import { CourseCard } from '@/entities/Course'
import { COURSES } from '@/shared/mocks'
import { Button } from '@/shared/ui/Button'
import { TopSection } from '@/shared/ui/TopSection'

export const Courses = () => {
  return (
    <TopSection
      title="Top Courses"
      action={<Button text="See all" onClick={() => alert('переход на стр с курсами')} />}
    >
      {COURSES.map((course) => (
        <CourseCard key={course.id} {...course} />
      ))}
    </TopSection>
  )
}
