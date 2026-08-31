import courseCover from '@/shared/assets/img/cover.jpg'

import { TopSection } from '@/shared/ui/TopSection'

import { CourseCard } from '@/entities/Course'

const COURSES = [
  { id: 0, cover: courseCover, title: "Beginner's Guide to Design", author: 'By Ronald Richards', price: 149.9 },
  { id: 1, cover: courseCover, title: "Beginner's Guide to Design", author: 'By Ronald Richards', price: 149.9 },
  { id: 2, cover: courseCover, title: "Beginner's Guide to Design", author: 'By Ronald Richards', price: 149.9 },
  { id: 3, cover: courseCover, title: "Beginner's Guide to Design", author: 'By Ronald Richards', price: 149.9 },
]

export const Courses = () => {
  return (
    <TopSection title="Top Courses">
      {COURSES.map(({ id, cover, title, author, price }) => (
        <CourseCard key={id} cover={cover} title={title} author={author} price={price} />
      ))}
    </TopSection>
  )
}
