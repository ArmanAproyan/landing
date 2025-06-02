import { useClassNames, useOutsideClick } from '@/hooks'
import { NavBarItems } from './Navbar.const'
import classNames from 'classnames'
import { TNavBarProps } from './NavBar.types'
import { Overlay } from 'components'

import styles from './Navbar.module.scss'

export const NavBar = ({ isOpen, toggleMenu }: TNavBarProps) => {
  const { cn } = useClassNames('list', styles)
  const listRef = useOutsideClick<HTMLUListElement>(toggleMenu, isOpen)

  const drawUlitems = (
    <ul ref={listRef} className={classNames(cn(), { [cn('--open')]: isOpen })}>
      {NavBarItems.map(({ id, title, isActive }) => (
        <li
          key={id}
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
