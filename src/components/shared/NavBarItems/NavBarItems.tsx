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
    <ul ref={listRef} className={cn('', { open: isOpen, [variant]: variant !== 'default' })}>
      {navItems.map(({ id, title, isActive }) => (
        <li
          key={id}
          onClick={() => handleClick(id)}
          className={cn('__item', {
            active: isActive && variant === 'default',
            [variant]: variant !== 'default'
          })}
        >
          {title}
        </li>
      ))}
    </ul>
  )
}
