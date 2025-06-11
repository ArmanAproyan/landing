import classNames from 'classnames'
import { useClassNames } from '@/hooks'
import { TNavBarItemsProps } from './NavBarItems.types'

import styles from './NavBarItems.module.scss'

export const NavBarItems = ({
  listRef,
  navItems,
  handleClick,
  isOpen = false,
  variant = 'default'
}: TNavBarItemsProps) => {
  const { cn } = useClassNames('list', styles)
  return (
    <ul
      ref={listRef}
      className={classNames(
        cn(),
        { [cn('--open')]: isOpen },
        { [cn(`--${variant}`)]: variant && variant !== 'default' }
      )}
    >
      {navItems.map(({ id, title, isActive }) => (
        <li
          key={id}
          onClick={() => handleClick(id)}
          className={classNames(
            cn('__item'),
            { [cn('__item__active')]: isActive && variant === 'default' },
            { [cn(`__item--${variant}`)]: variant && variant !== 'default' }
          )}
        >
          {title}
        </li>
      ))}
    </ul>
  )
}
