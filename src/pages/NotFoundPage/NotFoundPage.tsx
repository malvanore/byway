import { Heading } from '@/shared/ui/Heading'

import styles from './NotFoundPage.module.scss'

import notFoundPageBanner from '@/shared/assets/img/notFoundPageBanner.jpg'

export const NotFoundPage = () => {
  return (
    <section className={styles.section}>
      <img src={notFoundPageBanner} alt="" width={540} height={180} />
      <Heading level={1}>Page Not Found</Heading>
    </section>
  )
}
