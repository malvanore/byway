import { CategoryCard } from '@/entities/Category'
import { useMockData } from '@/shared/mocks'
import { Button } from '@/shared/ui/Button'
import { TopSection } from '@/shared/ui/TopSection'

export const Categories = () => {
  const { categories } = useMockData()

  return (
    <TopSection
      title="Top Categories"
      action={<Button text="See all" onClick={() => alert('переход на стр всех категорий')} />}
    >
      {categories.map(({ id }) => (
        <CategoryCard key={id} id={id} />
      ))}
    </TopSection>
  )
}
