import cn from 'classnames'

import inviteImage from '@/shared/assets/img/invite.png'
import person1 from '@/shared/assets/img/person1.png'
import person2 from '@/shared/assets/img/person2.png'
import person3 from '@/shared/assets/img/person3.png'
import starIcon from '@/shared/assets/icons/star.svg'

import styles from './Banner.module.scss'

export const Banner = () => {
  return (
    <div className={styles.banner}>
      <div className={cn(styles.circle, styles.circle1)}>
        <img src={person1} className={styles.person} alt="" />
      </div>
      <div className={cn(styles.circle, styles.circle2)}>
        <img src={person2} className={styles.person} alt="" />
      </div>
      <div className={cn(styles.circle, styles.circle3)}>
        <img src={person3} className={styles.person} alt="" />
      </div>

      <img src={starIcon} alt="" className={styles.star} />
      <img src={inviteImage} alt="" className={styles.invite} />
    </div>
  )
}
