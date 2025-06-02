import { MenuTitles, TNavBar } from './NavBar.types'
import { v4 as uuid } from 'uuid'

export const NavBarItems: TNavBar<string | number>[] = [
  { id: uuid(), title: MenuTitles.HOME, isActive: true },
  { id: uuid(), title: MenuTitles.SCHEDULE, isActive: false },
  { id: uuid(), title: MenuTitles.SPEAKERS, isActive: false },
  { id: uuid(), title: MenuTitles.TICKETS, isActive: false },
  { id: uuid(), title: MenuTitles.VENUE, isActive: false },
  { id: uuid(), title: MenuTitles.SPONSORS, isActive: false }
]
