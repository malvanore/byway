import { CategoryCard } from '@/entities/Category'
import { CATEGORIES } from '@/shared/mocks'
import { Button } from '@/shared/ui/Button'
import { TopSection } from '@/shared/ui/TopSection'

export const Categories = () => {
  return (
    <TopSection
      title="Top Categories"
      action={<Button text="See all" onClick={() => console.log('переход на стр всех категорий')} />}
    >
      {CATEGORIES.map((category) => (
        <CategoryCard key={category.id} {...category} />
      ))}
    </TopSection>
  )
}
