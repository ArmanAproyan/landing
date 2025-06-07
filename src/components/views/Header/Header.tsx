import { useState } from 'react'
import { useClassNames, useCloseMobileMenu, useLockBodyScroll } from '@/hooks'
import { Logo } from '@/assets/icons'
import { Burger, NavBar } from '@/components'

import styles from './Header.module.scss'

export const Header = () => {
  const { cn } = useClassNames('header', styles)
  const [isOpenBurger, setIsOpenBurger] = useState(false)

  const toggleMenu = () => setIsOpenBurger((prev) => !prev)
  const closeMenu = () => setIsOpenBurger(false)

  useLockBodyScroll(isOpenBurger)
  useCloseMobileMenu({ isOpen: isOpenBurger, closeMenu })

  return (
    <header className={cn()}>
      <div className={cn('__logo')}>
        <Logo className={cn('__logo__item')} />
      </div>
      <Burger isOpen={isOpenBurger} toggleMenu={toggleMenu} />
      <NavBar isOpen={isOpenBurger} toggleMenu={toggleMenu} />
    </header>
  )
}
