import { Link } from 'react-router'
import cn from 'classnames'

import { ROUTES_CONST } from '@/shared/config/routes'
import { Input } from '@/shared/ui/Input'

import styles from './Header.module.scss'

import CartIcon from '@/shared/assets/icons/cart.svg?react'
import Logo from '@/shared/assets/icons/logo.svg?react'
import SearchIcon from '@/shared/assets/icons/search.svg?react'

export const Header = () => {
  return (
    <header className={styles.header}>
      <Link className={styles.logoLink} to={ROUTES_CONST.home} aria-label="Byway home">
        <Logo />
      </Link>
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
          <Link className={styles.cart} to={ROUTES_CONST.cart}>
            <CartIcon />
          </Link>

          <Link className={cn(styles.authLink, styles.login)} to={ROUTES_CONST.login}>
            Log in
          </Link>

          <Link className={cn(styles.authLink, styles.signup)} to={ROUTES_CONST.signup}>
            Sign up
          </Link>
        </nav>
      </div>
    </header>
  )
}
