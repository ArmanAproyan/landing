import { v4 as uuidv4 } from 'uuid'
import { TNavBar } from './NavBar.types'

export const NavBarItems: TNavBar[] = [
  { id: uuidv4(), title: 'Home', isActive: true },
  { id: uuidv4(), title: 'Schedule', isActive: false },
  { id: uuidv4(), title: 'Speakers', isActive: false },
  { id: uuidv4(), title: 'Tickets', isActive: false },
  { id: uuidv4(), title: 'Venue', isActive: false },
  { id: uuidv4(), title: 'Sponsors', isActive: false }
]
