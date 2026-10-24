import { CategoryCard, selectCategories } from '@/entities/Category'
import { useAppSelector } from '@/shared/lib/hooks'
import { ScrollRow } from '@/shared/ui/ScrollRow'
import { TopSection } from '@/shared/ui/TopSection'

export const Categories = () => {
  const categories = useAppSelector(selectCategories)

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
