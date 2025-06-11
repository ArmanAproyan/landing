import { useOutsideClick } from '@/hooks'
import { NavBarItems as initialItems } from './Navbar.const'
import { TNavBarProps } from './NavBar.types'
import { Overlay } from 'components'
import { useState } from 'react'
import { TNavBar } from './NavBar.types'
import { NavBarItems } from 'components'

export const NavBar = ({ isOpen, toggleMenu }: TNavBarProps) => {
  const listRef = useOutsideClick<HTMLUListElement>(toggleMenu, isOpen)

  const [navItems, setNavItems] = useState<TNavBar<number>[]>(initialItems)

  const handleSelect = (selectedId: number) => {
    setNavItems(navItems.map((item) => ({ ...item, isActive: item.id === selectedId })))
    if (isOpen) {
      toggleMenu()
    }
  }

  return (
    <>
      {isOpen && <Overlay />}
      <NavBarItems
        listRef={listRef}
        navItems={navItems}
        handleClick={handleSelect}
        isOpen={isOpen}
        variant="default"
      />
    </>
  )
}
