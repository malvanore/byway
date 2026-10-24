import cn from 'classnames'

// import { Button } from '@/shared/ui/Button'
import { Input } from '@/shared/ui/Input'

import styles from './Header.module.scss'

import CartIcon from '@/shared/assets/icons/cart.svg?react'
import Logo from '@/shared/assets/icons/logo.svg?react'
import SearchIcon from '@/shared/assets/icons/search.svg?react'

export const Header = () => {
  return (
    <header className={styles.header}>
      <a className={styles.logoLink} href="/" aria-label="Byway home">
        <Logo />
      </a>
      <div className={styles.wrapper}>
        <form className={styles.form} role="search">
          <Input
            className={styles.search}
            name="search"
            type="search"
            placeholder="Search..."
            iconRight={
              <button type="submit" className={styles.searchButton} aria-label="Search">
                <SearchIcon />
              </button>
            }
          />
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
