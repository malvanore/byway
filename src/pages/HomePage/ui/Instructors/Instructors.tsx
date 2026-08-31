import avatar from '@/shared/assets/img/avatar.jpg'

import { TopSection } from '@/shared/ui/TopSection'

import { UserCard } from '@/entities/UserCard'

const INSTRUCTORS = [
  { id: 0, avatar, name: 'Ronald Richards', occupation: 'UI/UX Designer' },
  { id: 1, avatar, name: 'Ronald Richards', occupation: 'UI/UX Designer' },
  { id: 2, avatar, name: 'Ronald Richards', occupation: 'UI/UX Designer' },
  { id: 3, avatar, name: 'Ronald Richards', occupation: 'UI/UX Designer' },
]

export const Instructors = () => {
  return (
    <TopSection title="Top Instructors">
      {INSTRUCTORS.map(({ id, avatar, name, occupation }) => (
        <UserCard key={id} avatar={avatar} name={name} occupation={occupation} />
      ))}
    </TopSection>
  )
}
