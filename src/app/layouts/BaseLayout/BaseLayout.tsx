import type { ReactNode } from 'react'

import { Footer } from '@/widgets/Footer'
import { CONTACTS, HELP_LINKS, PROGRAM_LINKS } from '@/widgets/Footer'
import { Header } from '@/widgets/Header'

import styles from './BaseLayout.module.scss'
interface BaseLayoutProps {
  children: ReactNode
}

export const BaseLayout = ({ children }: BaseLayoutProps) => {
  return (
    <>
      <Header />
      <div className={styles.page}>
        <main className={styles.main}>{children}</main>
      </div>
      <Footer helpLinks={HELP_LINKS} programLinks={PROGRAM_LINKS} contacts={CONTACTS} />
    </>
  )
}
