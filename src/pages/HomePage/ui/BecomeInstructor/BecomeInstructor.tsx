import { Button } from '@/shared/ui/Button'
import { PromoContent } from '@/shared/ui/PromoContent'

import styles from './BecomeInstructor.module.scss'

import personInstructor from '@/shared/assets/img/personInstructor.svg'

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
        action={
          <Button
            text={'Start your instructor journey'}
            onClick={() => alert('Переход на стр для реги инструктором')}
          ></Button>
        }
      />
    </section>
  )
}
