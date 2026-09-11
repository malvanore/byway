import type { Category } from '@/entities/Category'
import type { Course } from '@/entities/Course'
import type { User } from '@/entities/User'

import astrologyIcon from '@/shared/assets/icons/astrology.svg'
import avatarImage from '@/shared/assets/img/avatar.jpg'
import courseCover from '@/shared/assets/img/cover.jpg'

export const INSTRUCTORS: User[] = [
  { id: 0, avatar: avatarImage, name: 'Ronald Richards', occupation: 'UI/UX Designer' },
  { id: 1, avatar: avatarImage, name: 'Ronald Richards', occupation: 'UI/UX Designer' },
  { id: 2, avatar: avatarImage, name: 'Ronald Richards', occupation: 'UI/UX Designer' },
  { id: 3, avatar: avatarImage, name: 'Ronald Richards', occupation: 'UI/UX Designer' },
]

export const CATEGORIES: Category[] = [
  { id: 0, iconSrc: astrologyIcon, title: 'Astrology', coursesCount: 11 },
  { id: 1, iconSrc: astrologyIcon, title: 'Development', coursesCount: 12 },
  { id: 2, iconSrc: astrologyIcon, title: 'Marketing', coursesCount: 12 },
  { id: 3, iconSrc: astrologyIcon, title: 'Physics', coursesCount: 14 },
]

export const COURSES: Course[] = [
  { id: 0, cover: courseCover, title: "Beginner's Guide to Design", author: 'Ronald Richards', price: 149.9 },
  { id: 1, cover: courseCover, title: "Beginner's Guide to Design", author: 'Ronald Richards', price: 149.9 },
  { id: 2, cover: courseCover, title: "Beginner's Guide to Design", author: 'Ronald Richards', price: 149.9 },
  { id: 3, cover: courseCover, title: "Beginner's Guide to Design", author: 'Ronald Richards', price: 149.9 },
]
