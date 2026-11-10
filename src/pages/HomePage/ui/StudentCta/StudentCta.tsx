import { ROUTES_CONST } from '@/shared/config/routes'
import { ButtonLink } from '@/shared/ui/Button'
import { PromoContent } from '@/shared/ui/PromoContent'

import styles from './StudentCta.module.scss'

import ChevronRightIcon from '@/shared/assets/icons/chevronRight.svg?react'
import personEducation from '@/shared/assets/img/personEducation.svg'

export const StudentCta = () => {
  return (
    <section className={styles.section}>
      <PromoContent
        title="Transform your life through education"
        description={
          'Learners around the world are launching new careers, advancing in ' +
          'their fields, and enriching their lives.'
        }
        action={
          <ButtonLink to={ROUTES_CONST.courses} iconRight={<ChevronRightIcon />}>
            See All
          </ButtonLink>
        }
      />

      <div className={styles.image}>
        <img src={personEducation} alt="Student learning online" />
      </div>
    </section>
  )
}
