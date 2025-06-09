import dayjs from 'dayjs'

export const formatHourAndMinute = (from: string, to: string) => {
  const fromTime = dayjs(from)
  const toTime = dayjs(to)

  return `${fromTime.format('HH:mm')}–${toTime.format('HH:mm')}`
}
