import { Button } from '@/shared/ui/Button'
import { PromoContent } from '@/shared/ui/PromoContent'

import { Banner } from './Banner'

import styles from './Hero.module.scss'

import ChevronRightIcon from '@/shared/assets/icons/chevronRight.svg?react'

export const Hero = () => {
  return (
    <section className={styles.section}>
      <div className={styles.wrapperLeft}>
        <PromoContent
          title="Unlock Your potential with Byway"
          description={
            'Welcome to Byway, where learning knows no bounds. ' +
            'We believe that education is the key to personal and professional growth, ' +
            "and we're here to guide you on your journey to success."
          }
          action={
            <Button iconRight={<ChevronRightIcon />} onClick={() => alert('переход на стр с менторами')}>
              Start your instructor journey
            </Button>
          }
        />
      </div>
      <div className={styles.wrapperRight}>
        <Banner />
      </div>
    </section>
  )
}
