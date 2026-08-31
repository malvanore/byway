import astrologyIcon from '@/shared/assets/icons/astrology.svg'

import { TopSection } from '@/shared/ui/TopSection'

import { CategoryCard } from '@/entities/Category'

const CATEGORIES = [
  { id: 0, iconSrc: astrologyIcon, title: 'Astrology', coursesCount: 11 },
  { id: 1, iconSrc: astrologyIcon, title: 'Development', coursesCount: 12 },
  { id: 2, iconSrc: astrologyIcon, title: 'Marketing', coursesCount: 12 },
  { id: 3, iconSrc: astrologyIcon, title: 'Physics', coursesCount: 14 },
]

export const Categories = () => {
  return (
    <TopSection title="Top Categories">
      {CATEGORIES.map(({ id, iconSrc, title, coursesCount }) => (
        <CategoryCard key={id} iconSrc={iconSrc} title={title} coursesCount={coursesCount} />
      ))}
    </TopSection>
  )
}
