import { Button } from '@/shared/ui/Button'
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
          <Button iconRight={<ChevronRightIcon />} onClick={() => alert('переход на стр с предложением')}>
            Checkout courses
          </Button>
        }
      />

      <div className={styles.image}>
        <img src={personEducation} alt="Student learning online" />
      </div>
    </section>
  )
}
