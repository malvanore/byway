import starIcon from '@/assets/icons/star.svg'
import person1 from '@/assets/img/person1.png'
import person2 from '@/assets/img/person2.png'
import person3 from '@/assets/img/person3.png'
import inviteImage from '@/assets/img/invite.png'

import { PromoContent } from '@/pages/HomePage/ui/PromoContent/PromoContent'

import styles from './Hero.module.scss'

export const Hero = () => {
  return (
    <section className={styles.section}>
      <PromoContent
        title="Unlock Your potential with Byway"
        description={
          'Welcome to Byway, where learning knows no bounds. ' +
          'We believe that education is the key to personal and professional growth, ' +
          "and we're here to guide you on your journey to success."
        }
        buttonText="Start your instructor journey"
      />

      <div className={styles.composition}>
        <div className={`${styles.circle} ${styles.circle1}`}>
          <img src={person1} className={styles.person} alt="" />
        </div>
        <div className={`${styles.circle} ${styles.circle2}`}>
          <img src={person2} className={styles.person} alt="" />
        </div>
        <div className={`${styles.circle} ${styles.circle3}`}>
          <img src={person3} className={styles.person} alt="" />
        </div>

        <img src={starIcon} alt="" className={styles.star} />
        <img src={inviteImage} alt="" className={styles.invite} />
      </div>
    </section>
  )
}
