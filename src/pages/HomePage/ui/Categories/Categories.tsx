import { CategoryCard } from '@/entities/Category'
import { CATEGORIES } from '@/shared/mocks'
import { Button } from '@/shared/ui/Button'
import { TopSection } from '@/shared/ui/TopSection'

export const Categories = () => {
  return (
    <TopSection title="Top Categories" action={<Button text="See all" onClick={() => {}} />}>
      {CATEGORIES.map(({ id, ...category }) => (
        <CategoryCard key={id} {...category} />
      ))}
    </TopSection>
  )
}
