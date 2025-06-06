type TAgentaDay = {
  from: string
  to: string
}

type TAgentaType = {
  day: TAgentaDay
  place: string
}

export const AGENDA_DATA: TAgentaType = {
  day: {
    from: '2052-10-15T00:00:00Z',
    to: '2052-10-17T23:59:59Z'
  },
  place: 'Horizon Convention Center, Amsterdam'
}
