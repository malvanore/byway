import AstrologyIcon from '@/assets/icons/astrology.svg?react'

import { TopSection } from '@/pages/HomePage/ui/TopSection/TopSection'

import { CategoryCard } from '@/entities/CategoryCard'

const CATEGORIES = [
  { id: 0, icon: AstrologyIcon, title: 'Astrology', coursesCount: 11 },
  { id: 1, icon: AstrologyIcon, title: 'Development', coursesCount: 12 },
  { id: 2, icon: AstrologyIcon, title: 'Marketing', coursesCount: 12 },
  { id: 3, icon: AstrologyIcon, title: 'Physics', coursesCount: 14 },
]

export const Categories = () => {
  return (
    <TopSection title="Top Categories">
      {CATEGORIES.map(({ id, icon: Icon, title, coursesCount }) => (
        <CategoryCard key={id} icon={<Icon />} title={title} coursesCount={coursesCount} />
      ))}
    </TopSection>
  )
}
