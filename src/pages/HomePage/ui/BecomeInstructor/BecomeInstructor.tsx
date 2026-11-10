import { ROUTES_CONST } from '@/shared/config/routes'
import { ButtonLink } from '@/shared/ui/Button'
import { PromoContent } from '@/shared/ui/PromoContent'

import styles from './BecomeInstructor.module.scss'

import ChevronRightIcon from '@/shared/assets/icons/chevronRight.svg?react'
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
          <ButtonLink to={ROUTES_CONST.signup} iconRight={<ChevronRightIcon />}>
            See All
          </ButtonLink>
        }
      />
    </section>
  )
}
