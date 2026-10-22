import { Link } from 'react-router'

import { ROUTES_CONST } from '@/shared/config/routes'

import styles from './Footer.module.scss'

import Logo from '@/shared/assets/icons/logo.svg?react'

interface FooterLink {
  label: string
  href: string
}

interface FooterProps {
  helpLinks: FooterLink[]
  programLinks: FooterLink[]
  contacts: string[]
}

export const Footer = ({ helpLinks, programLinks, contacts }: FooterProps) => {
  return (
    <footer className={styles.footer}>
      <div className={styles.brand}>
        <Link className={styles.logo} to={ROUTES_CONST.home}>
          <Logo />
          <span className={styles.logoText}>Byway</span>
        </Link>

        <p className={styles.description}>
          Empowering learners through accessible and engaging online education. Byway is an online learning platform
          dedicated to providing high-quality, flexible, and affordable educational experiences.
        </p>
      </div>

      <nav className={styles.column}>
        <h2 className={styles.title}>Get Help</h2>

        <ul className={styles.list}>
          {helpLinks.map(({ label, href }) => (
            <li key={label}>
              <a className={styles.link} href={href}>
                {label}
              </a>
            </li>
          ))}
        </ul>
      </nav>

      <nav className={styles.column}>
        <h2 className={styles.title}>Programs</h2>

        <ul className={styles.list}>
          {programLinks.map(({ label, href }) => (
            <li key={label}>
              <a className={styles.link} href={href}>
                {label}
              </a>
            </li>
          ))}
        </ul>
      </nav>

      <div className={styles.column}>
        <h2 className={styles.title}>Contact Us</h2>
        <div className={styles.contacts}>
          {contacts.map((contact) => (
            <p key={contact}>{contact}</p>
          ))}
        </div>
      </div>
    </footer>
  )
}
