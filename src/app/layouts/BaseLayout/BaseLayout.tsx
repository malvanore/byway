import { Outlet } from 'react-router'

import { CONTACTS, Footer, HELP_LINKS, PROGRAM_LINKS } from '@/widgets/Footer'
import { Header } from '@/widgets/Header'

import styles from './BaseLayout.module.scss'

export const BaseLayout = () => {
  return (
    <>
      <Header />
      <div className={styles.page}>
        <main className={styles.main}>
          <Outlet />
        </main>
      </div>
      <Footer helpLinks={HELP_LINKS} programLinks={PROGRAM_LINKS} contacts={CONTACTS} />
    </>
  )
}
