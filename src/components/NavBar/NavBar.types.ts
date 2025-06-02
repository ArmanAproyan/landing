export type TNavBar = {
  id: string
  title: string
  isActive: boolean
}

export type TNavBarProps = {
  isOpen: boolean
  toggleMenu: () => void
}
