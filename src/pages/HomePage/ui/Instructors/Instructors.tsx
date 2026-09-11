import { UserCard } from '@/entities/User'
import { INSTRUCTORS } from '@/shared/mocks'
import { Button } from '@/shared/ui/Button'
import { TopSection } from '@/shared/ui/TopSection'

export const Instructors = () => {
  return (
    <TopSection
      title="Top Instructors"
      action={<Button text="See all" onClick={() => console.log('переход на стр с менторами')} />}
    >
      {INSTRUCTORS.map((instructor) => (
        <UserCard key={instructor.id} user={instructor} />
      ))}
    </TopSection>
  )
}
