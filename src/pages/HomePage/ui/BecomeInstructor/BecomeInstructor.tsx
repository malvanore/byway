import personInstructor from '@/shared/assets/img/personInstructor.svg'

import { PromoContent } from '@/shared/ui/PromoContent'

import styles from './BecomeInstructor.module.scss'

export const BecomeInstructor = () => {
  return (
    <section className={styles.section}>
      <div className={styles.image}>
        <img src={personInstructor} alt="Instructor teaching online" />
      </div>

      <PromoContent
        title="Become an Instructor"
        description={
          'Instructors from around the world teach millions of students on Byway. ' +
          'We provide the tools and skills to teach what you love.'
        }
        buttonText="Start your instructor journey"
      />
    </section>
  )
}
