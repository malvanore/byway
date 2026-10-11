import { UserCard } from '@/entities/User'
import { useMockData } from '@/shared/mocks'
import { Button } from '@/shared/ui/Button'
import { TopSection } from '@/shared/ui/TopSection'

export const Instructors = () => {
  const { instructors } = useMockData()

  return (
    <TopSection
      title="Top Instructors"
      action={<Button text="See all" onClick={() => alert('переход на стр с менторами')} />}
    >
      {instructors.map(({ id }) => (
        <UserCard key={id} id={id} />
      ))}
    </TopSection>
  )
}
