import { useClassNames, useOutsideClick } from '@/hooks'
import { NavBarItems as initialItems } from './Navbar.const'
import { TNavBarProps } from './NavBar.types'
import { Overlay } from 'components'
import { useState } from 'react'
import { TNavBar } from './NavBar.types'

import classNames from 'classnames'
import styles from './Navbar.module.scss'

export const NavBar = ({ isOpen, toggleMenu }: TNavBarProps) => {
  const { cn } = useClassNames('list', styles)
  const listRef = useOutsideClick<HTMLUListElement>(toggleMenu, isOpen)

  const [navItems, setNavItems] = useState<TNavBar<number>[]>(initialItems)

  const handleSelect = (selectedId: number) => {
    setNavItems(navItems.map((item) => ({ ...item, isActive: item.id === selectedId })))
    if (isOpen) {
      toggleMenu()
    }
  }

  const drawUlitems = (
    <ul ref={listRef} className={classNames(cn(), { [cn('--open')]: isOpen })}>
      {navItems.map(({ id, title, isActive }) => (
        <li
          key={id}
          onClick={() => handleSelect(id)}
          className={classNames(cn('__item'), {
            [cn('__item__active')]: isActive
          })}
        >
          {title}
        </li>
      ))}
    </ul>
  )

  return (
    <>
      {isOpen && <Overlay />}
      {drawUlitems}
    </>
  )
}
