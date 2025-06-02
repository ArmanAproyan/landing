import { MenuTitles, TNavBar } from './NavBar.types'

export const NavBarItems: TNavBar<string | number>[] = [
  { id: 1, title: MenuTitles.HOME, isActive: true },
  { id: 2, title: MenuTitles.SCHEDULE, isActive: false },
  { id: 3, title: MenuTitles.SPEAKERS, isActive: false },
  { id: 4, title: MenuTitles.TICKETS, isActive: false },
  { id: 5, title: MenuTitles.VENUE, isActive: false },
  { id: 5, title: MenuTitles.SPONSORS, isActive: false }
]
