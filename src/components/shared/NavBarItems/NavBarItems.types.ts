export type TNavItem = {
  id: number
  title: string
  isActive?: boolean
}

export type TNavBarItemsProps = {
  listRef?: React.RefObject<HTMLUListElement>
  navItems: TNavItem[]
  handleClick?: (id: number) => void
  isOpen?: boolean
  variant?: 'default' | 'secondary'
}
