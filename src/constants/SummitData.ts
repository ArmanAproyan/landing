type TSummitday = {
  from: string
  to: string
}

type TSimmit = {
  day: TSummitday
  place: string
}

export const SUMMIT_DATA: TSimmit = {
  day: {
    from: '2052-10-15T00:00:00.000Z',
    to: '2052-10-17T23:59:59.000Z'
  },
  place: 'Horizon Convention Center, TechCity, Utopolis'
}
