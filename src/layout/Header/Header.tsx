import Logo from '@/assets/icons/logo.svg?react'
import SearchIcon from '@/assets/icons/search.svg?react'
import CartIcon from '@/assets/icons/cart.svg?react'

import styles from './Header.module.scss'

export const Header = () => {
  return (
    <header className={styles.header}>
      <Logo />
      <div className={styles.wrapper}>
        <form className={styles.form} role="search">
          <input name="search" className={styles.search} type="search" placeholder="Search..." />
          <button className={styles.searchButton} type="submit">
            <SearchIcon />
          </button>
        </form>

        <a className={styles.cart} href="/cart">
          <CartIcon />
        </a>

        <a className={styles.login} href="/login">
          Log in
        </a>

        <a className={styles.signup} href="/signup">
          Sign up
        </a>
      </div>
    </header>
  )
}
