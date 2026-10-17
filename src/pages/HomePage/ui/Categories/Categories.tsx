import { CategoryCard } from '@/entities/Category'
import { useMockData } from '@/shared/mocks'
import { Button } from '@/shared/ui/Button'
import { TopSection } from '@/shared/ui/TopSection'

import ChevronRightIcon from '@/shared/assets/icons/chevronRight.svg?react'

export const Categories = () => {
  const { categories } = useMockData()

  return (
    <TopSection
      title="Top Categories"
      action={
        <Button iconRight={<ChevronRightIcon />} onClick={() => alert('переход на стр всех категорий')}>
          See all
        </Button>
      }
    >
      {categories.map(({ id }) => (
        <CategoryCard key={id} id={id} />
      ))}
    </TopSection>
  )
}
