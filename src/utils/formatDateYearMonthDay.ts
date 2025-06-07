import dayjs from 'dayjs'

export const formatDateYearMonthDay = (from: string, to: string) => {
  const fromDate = dayjs(from)
  const toDate = dayjs(to)

  if (fromDate.month() === toDate.month()) {
    return `${fromDate.format('MMMM D')}-${toDate.format('D, YYYY')}`
  }

  return `${fromDate.format('MMMM D, YYYY')} – ${toDate.format('MMMM D, YYYY')}`
}
