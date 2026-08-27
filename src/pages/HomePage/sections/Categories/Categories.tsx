import AstrologyIcon from '@/assets/icons/astrology.svg'

import { TopSection } from '@/pages/HomePage/ui/TopSection/TopSection'

import { CategoryCard } from '@/entities/CategoryCard'

const CATEGORIES = [
  { id: 0, iconSrc: AstrologyIcon, title: 'Astrology', coursesCount: 11 },
  { id: 1, iconSrc: AstrologyIcon, title: 'Development', coursesCount: 12 },
  { id: 2, iconSrc: AstrologyIcon, title: 'Marketing', coursesCount: 12 },
  { id: 3, iconSrc: AstrologyIcon, title: 'Physics', coursesCount: 14 },
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
