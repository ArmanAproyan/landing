export type TNavBar = {
  id: number
  title: string
  isActive: boolean
}

export type TNavBarProps = {
  isOpen: boolean
  toggleMenu: () => void
}
