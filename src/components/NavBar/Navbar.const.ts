import { TNavBar } from './NavBar.types'
import { v4 as uuid } from 'uuid'

export const NavBarItems: TNavBar[] = [
  { id: uuid(), title: 'Home', isActive: true },
  { id: uuid(), title: 'Schedule', isActive: false },
  { id: uuid(), title: 'Speakers', isActive: false },
  { id: uuid(), title: 'Tickets', isActive: false },
  { id: uuid(), title: 'Venue', isActive: false },
  { id: uuid(), title: 'Sponsors', isActive: false }
]
