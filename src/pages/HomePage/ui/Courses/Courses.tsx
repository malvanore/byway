import { CourseCard } from '@/entities/Course'
import { Button } from '@/shared/ui/Button'
import { TopSection } from '@/shared/ui/TopSection'

import courseCover from '@/shared/assets/img/cover.jpg'

const COURSES = [
  { id: 0, cover: courseCover, title: "Beginner's Guide to Design", author: 'By Ronald Richards', price: 149.9 },
  { id: 1, cover: courseCover, title: "Beginner's Guide to Design", author: 'By Ronald Richards', price: 149.9 },
  { id: 2, cover: courseCover, title: "Beginner's Guide to Design", author: 'By Ronald Richards', price: 149.9 },
  { id: 3, cover: courseCover, title: "Beginner's Guide to Design", author: 'By Ronald Richards', price: 149.9 },
]

export const Courses = () => {
  return (
    <TopSection title="Top Courses" action={<Button text="See all" onClick={() => {}} />}>
      {COURSES.map(({ id, ...course }) => (
        <CourseCard key={id} {...course} />
      ))}
    </TopSection>
  )
}
