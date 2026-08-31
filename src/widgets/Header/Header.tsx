import cn from 'classnames'

import Logo from '@/shared/assets/icons/logo.svg?react'
import SearchIcon from '@/shared/assets/icons/search.svg?react'
import CartIcon from '@/shared/assets/icons/cart.svg?react'

import styles from './Header.module.scss'

export const Header = () => {
  return (
    <header className={styles.header}>
      <a className={styles.logoLink} href="/" aria-label="Byway home">
        <Logo />
      </a>
      <div className={styles.wrapper}>
        <form className={styles.form} role="search">
          <input name="search" className={styles.search} type="search" placeholder="Search..." />
          <button className={styles.searchButton} type="submit">
            <SearchIcon />
          </button>
        </form>
        <nav className={styles.nav}>
          <a className={styles.cart} href="/cart">
            <CartIcon />
          </a>

          <a className={cn(styles.authLink, styles.login)} href="/login">
            Log in
          </a>

          <a className={cn(styles.authLink, styles.signup)} href="/signup">
            Sign up
          </a>
        </nav>
      </div>
    </header>
  )
}
