import personEducation from '@/assets/img/personEducation.svg'

import { PromoContent } from '@/pages/HomePage/ui/PromoContent/PromoContent'

import styles from './StudentCta.module.scss'

export const StudentCta = () => {
  return (
    <section className={styles.section}>
      <PromoContent
        title="Transform your life through education"
        description={
          'Learners around the world are launching new careers, advancing in ' +
          'their fields, and enriching their lives.'
        }
        buttonText="Checkout courses"
      />

      <div className={styles.image}>
        <img src={personEducation} alt="Student learning online" />
      </div>
    </section>
  )
}
