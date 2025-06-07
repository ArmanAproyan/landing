export type TNavBar<TId> = {
  id: TId
  title: string
  isActive: boolean
}

export type TNavBarProps = {
  isOpen: boolean
  toggleMenu: () => void
}

export enum MenuTitles {
  'HOME' = 'Home',
  'SCHEDULE' = 'Schedule',
  'SPEAKERS' = 'Speakers',
  'TICKETS' = 'Tickets',
  'VENUE' = 'Venue',
  'SPONSORS' = 'Sponsors'
}
