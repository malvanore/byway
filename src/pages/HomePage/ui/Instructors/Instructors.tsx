import { UserCard } from '@/entities/User'
import { useMockData } from '@/shared/mocks'
import { Grid } from '@/shared/ui/Grid'
import { TopSection } from '@/shared/ui/TopSection'

export const Instructors = () => {
  const { instructors } = useMockData()

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
