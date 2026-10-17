import { CourseCard } from '@/entities/Course'
import { useMockData } from '@/shared/mocks'
import { Button } from '@/shared/ui/Button'
import { TopSection } from '@/shared/ui/TopSection'

import ChevronRightIcon from '@/shared/assets/icons/chevronRight.svg?react'

export const Courses = () => {
  const { courses } = useMockData()

  return (
    <TopSection
      title="Top Courses"
      action={
        <Button iconRight={<ChevronRightIcon />} onClick={() => alert('переход на стр с курсами')}>
          See all
        </Button>
      }
    >
      {courses.map(({ id }) => (
        <CourseCard key={id} id={id} />
      ))}
    </TopSection>
  )
}
