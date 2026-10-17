import { UserCard } from '@/entities/User'
import { useMockData } from '@/shared/mocks'
import { Button } from '@/shared/ui/Button'
import { TopSection } from '@/shared/ui/TopSection'

import ChevronRightIcon from '@/shared/assets/icons/chevronRight.svg?react'

export const Instructors = () => {
  const { instructors } = useMockData()

  return (
    <TopSection
      title="Top Instructors"
      action={
        <Button iconRight={<ChevronRightIcon />} onClick={() => alert('переход на стр с менторами')}>
          See all
        </Button>
      }
    >
      {instructors.map(({ id }) => (
        <UserCard key={id} id={id} />
      ))}
    </TopSection>
  )
}
