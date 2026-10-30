import { selectUsers, UserCard } from '@/entities/User'
import { useAppSelector } from '@/shared/lib/hooks'
import { Grid } from '@/shared/ui/Grid'
import { TopSection } from '@/shared/ui/TopSection'

export const InstructorsSection = () => {
  const instructors = useAppSelector(selectUsers)

  return (
    <TopSection title="Top Instructors" textButton="See All">
      <Grid>
        {instructors.map(({ id }) => (
          <UserCard key={id} id={id} />
        ))}
      </Grid>
    </TopSection>
  )
}
