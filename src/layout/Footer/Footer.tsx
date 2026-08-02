import Logo from '@/assets/icons/logo.svg?react'

import styles from './Footer.module.scss'

const HELP_LINKS = [
  { label: 'Contact Us', href: '#' },
  { label: 'Latest Articles', href: '#' },
  { label: 'FAQ', href: '#' },
]

const PROGRAM_LINKS = [
  { label: 'Art & Design', href: '#' },
  { label: 'Business', href: '#' },
  { label: 'IT & Software', href: '#' },
  { label: 'Languages', href: '#' },
  { label: 'Programming', href: '#' },
]

const CONTACTS = [
  'Address: Saint-Petersburg, Kronverkskaya st., building 7',
  'Tel: 8(800) 555-35-35',
  'Mail: bywayedu@webkul.in',
]

export const Footer = () => {
  return (
    <footer className={styles.footer}>
      <div className={styles.brand}>
        <a className={styles.logo} href="#">
          <Logo />
          <span className={styles.logoText}>Byway</span>
        </a>

        <p className={styles.description}>
          Empowering learners through accessible and engaging online education. Byway is an online learning platform
          dedicated to providing high-quality, flexible, and affordable educational experiences.
        </p>
      </div>

      <nav className={styles.column}>
        <h2 className={styles.title}>Get Help</h2>

        <ul className={styles.list}>
          {HELP_LINKS.map(({ label }) => (
            <li key={label}>
              <a className={styles.link} href="#">
                {label}
              </a>
            </li>
          ))}
        </ul>
      </nav>

      <nav className={styles.column}>
        <h2 className={styles.title}>Programs</h2>

        <ul className={styles.list}>
          {PROGRAM_LINKS.map(({ label }) => (
            <li key={label}>
              <a className={styles.link} href="#">
                {label}
              </a>
            </li>
          ))}
        </ul>
      </nav>

      <div className={styles.column}>
        <h2 className={styles.title}>Contact Us</h2>
        <div className={styles.contacts}>
          {CONTACTS.map((contact) => (
            <p key={contact}>{contact}</p>
          ))}
        </div>
      </div>
    </footer>
  )
}
