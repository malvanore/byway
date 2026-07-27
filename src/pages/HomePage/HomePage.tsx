// import type { ReactNode } from 'react'
// import angleBracket from '@/assets/icons/angleBracket.svg'
import AstrologyIcon from '@/assets/icons/astrology.svg?react'
import starIcon from '@/assets/icons/star.svg'
import courseCover from '@/assets/img/cover.jpg'
import avatar from '@/assets/img/avatar.jpg'
import person1 from '@/assets/img/person1.png'
import person2 from '@/assets/img/person2.png'
import person3 from '@/assets/img/person3.png'
import inviteImage from '@/assets/img/invite.png'
import personInstructor from '@/assets/img/personInstructor.svg'
import personEducation from '@/assets/img/personEducation.svg'

import { TopSection } from '@/pages/HomePage/TopSection/TopSection'
import { PromoContent } from '@/pages/HomePage/PromoContent/PromoContent'

import { CategoryCard } from '@/entities/CategoryCard'
import { CourseCard } from '@/entities/CourseCard'
import { UserCard } from '@/entities/UserCard'
import { Header } from '@/layout/Header'
import { Footer } from '@/layout/Footer'

import styles from './HomePage.module.scss'

const ACHIEVEMENT = [
  { value: '250+', label: 'Courses by our best mentors' },
  { value: '100+', label: 'Experienced mentors' },
  { value: '2000+', label: 'Users learning something new' },
]

const CATEGORIES = [
  { id: 0, icon: <AstrologyIcon />, title: 'Astrology', coursesCount: 11 },
  { id: 1, icon: <AstrologyIcon />, title: 'Development', coursesCount: 12 },
  { id: 2, icon: <AstrologyIcon />, title: 'Marketing', coursesCount: 12 },
  { id: 3, icon: <AstrologyIcon />, title: 'Physics', coursesCount: 14 },
]

const COURSES = [
  { id: 0, cover: courseCover, title: "Beginner's Guide to Design", author: 'By Ronald Richards', price: 149.9 },
  { id: 1, cover: courseCover, title: "Beginner's Guide to Design", author: 'By Ronald Richards', price: 149.9 },
  { id: 2, cover: courseCover, title: "Beginner's Guide to Design", author: 'By Ronald Richards', price: 149.9 },
  { id: 3, cover: courseCover, title: "Beginner's Guide to Design", author: 'By Ronald Richards', price: 149.9 },
]

const INSTRUCTORS = [
  { id: 0, avatar, name: 'Ronald Richards', occupation: 'UI/UX Designer' },
  { id: 1, avatar, name: 'Ronald Richards', occupation: 'UI/UX Designer' },
  { id: 2, avatar, name: 'Ronald Richards', occupation: 'UI/UX Designer' },
  { id: 3, avatar, name: 'Ronald Richards', occupation: 'UI/UX Designer' },
]

export const HomePage = () => {
  return (
    <div className={styles.page}>
      <Header />

      <main className={styles.main}>
        <section className={styles.hero}>
          <PromoContent
            title={'Unlock Your potential with Byway'}
            description={
              'Welcome to Byway, where learning knows no bounds. ' +
              'We believe that education is the key to personal and professional growth, ' +
              "and we're here to guide you on your journey to success."
            }
            buttonText={'Start your instructor journey'}
          />

          <div className={styles.composition}>
            <div className={`${styles.circle} ${styles.circle1}`}>
              <img src={person1} className={`${styles.person} ${styles.person1}`} alt="" />
            </div>
            <div className={`${styles.circle} ${styles.circle2}`}>
              <img src={person2} className={`${styles.person} ${styles.person2}`} alt="" />
            </div>
            <div className={`${styles.circle} ${styles.circle3}`}>
              <img src={person3} className={`${styles.person} ${styles.person3}`} alt="" />
            </div>
            <img src={starIcon} alt="" className={styles.star} />
            <img src={inviteImage} alt="" className={styles.invite} />
          </div>
        </section>

        <section className={styles.achievements}>
          {ACHIEVEMENT.map(({ value, label }) => (
            <div key={value} className={styles.achieveCard}>
              <span className={styles.achieveCardTitle}>{value}</span>
              <span className={styles.achieveCardDescription}>{label}</span>
            </div>
          ))}
        </section>

        <section className={styles.topList}>
          <TopSection title="Top Categories">
            {CATEGORIES.map(({ id, title, coursesCount }) => (
              <CategoryCard key={id} icon={<AstrologyIcon />} title={title} coursesCount={coursesCount} />
            ))}
          </TopSection>

          <TopSection title="Top Courses">
            {COURSES.map(({ id, cover, title, author, price }) => (
              <CourseCard key={id} cover={cover} title={title} author={author} price={price} />
            ))}
          </TopSection>

          <TopSection title="Top Instructors">
            {INSTRUCTORS.map(({ id, avatar, name, occupation }) => (
              <UserCard key={id} avatar={avatar} name={name} occupation={occupation} />
            ))}
          </TopSection>
        </section>

        <section className={styles.becomeInstructor}>
          <div className={styles.becomeInstructorImage}>
            <img src={personInstructor} alt="" />
          </div>
          <PromoContent
            title="Become an Instructor"
            description={
              'Instructors from around the world teach millions of students on Byway. ' +
              'We provide the tools and skills to teach what you love.'
            }
            buttonText="Start your instructor journey'"
          />
        </section>

        <section className={styles.studentCta}>
          <PromoContent
            title="Transform your life through education"
            description={
              'Learners around the world are launching new careers, advancing in ' +
              'their fields, and enriching their lives.'
            }
            buttonText="Checkout courses"
          />

          <div className={styles.studentCtaImage}>
            <img src={personEducation} alt="" />
          </div>
        </section>
      </main>

      <Footer />
    </div>
  )
}
