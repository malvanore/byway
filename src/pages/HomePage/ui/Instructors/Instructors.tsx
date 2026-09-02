import { UserCard } from '@/entities/User'
import { Button } from '@/shared/ui/Button'
import { TopSection } from '@/shared/ui/TopSection'

import avatarImage from '@/shared/assets/img/avatar.jpg'

const INSTRUCTORS = [
  { id: 0, avatar: avatarImage, name: 'Ronald Richards', occupation: 'UI/UX Designer' },
  { id: 1, avatar: avatarImage, name: 'Ronald Richards', occupation: 'UI/UX Designer' },
  { id: 2, avatar: avatarImage, name: 'Ronald Richards', occupation: 'UI/UX Designer' },
  { id: 3, avatar: avatarImage, name: 'Ronald Richards', occupation: 'UI/UX Designer' },
]

export const Instructors = () => {
  return (
    <TopSection title="Top Instructors" action={<Button text="See all" onClick={() => {}} />}>
      {INSTRUCTORS.map(({ id, ...instructor }) => (
        <UserCard key={id} {...instructor} />
      ))}
    </TopSection>
  )
}
