import { useClassNames, useOutsideClick } from '@/hooks'
import { NavBarItems } from './Navbar.const'
import classNames from 'classnames'
import { TNavBarProps } from './NavBar.types'
import { Overlay } from 'components'

import styles from './Navbar.module.scss'

export const NavBar = ({ isOpen, toggleMenu }: TNavBarProps) => {
  const { cn } = useClassNames('ul', styles)
  const outSideRef = useOutsideClick<HTMLUListElement>(toggleMenu, isOpen)

  const drawUlitems = (
    <ul ref={outSideRef} className={classNames(cn(), { [cn('--open')]: isOpen })}>
      {NavBarItems.map(({ id, title, isActive }) => (
        <li
          key={id}
          className={classNames(cn('__li'), {
            [cn('__li__active')]: isActive
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
