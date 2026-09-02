import { CategoryCard } from '@/entities/Category'
import { Button } from '@/shared/ui/Button'
import { TopSection } from '@/shared/ui/TopSection'

import astrologyIcon from '@/shared/assets/icons/astrology.svg'

const CATEGORIES = [
  { id: 0, iconSrc: astrologyIcon, title: 'Astrology', coursesCount: 11 },
  { id: 1, iconSrc: astrologyIcon, title: 'Development', coursesCount: 12 },
  { id: 2, iconSrc: astrologyIcon, title: 'Marketing', coursesCount: 12 },
  { id: 3, iconSrc: astrologyIcon, title: 'Physics', coursesCount: 14 },
]

export const Categories = () => {
  return (
    <TopSection title="Top Categories" action={<Button text="See all" onClick={() => {}} />}>
      {CATEGORIES.map(({ id, ...category }) => (
        <CategoryCard key={id} {...category} />
      ))}
    </TopSection>
  )
}
