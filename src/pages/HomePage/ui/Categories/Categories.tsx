import { CategoryCard } from '@/entities/Category'
import { useMockData } from '@/shared/mocks'
import { ScrollRow } from '@/shared/ui/ScrollRow'
import { TopSection } from '@/shared/ui/TopSection'

export const Categories = () => {
  const { categories } = useMockData()

  return (
    <TopSection title="Top Categories" textButton="See All">
      <ScrollRow>
        {categories.map(({ id }) => (
          <CategoryCard key={id} id={id} />
        ))}
      </ScrollRow>
    </TopSection>
  )
}
