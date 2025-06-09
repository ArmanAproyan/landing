export const startTimerDiff = (targetDate: string) => {
  const now = new Date()
  const end = new Date(targetDate)
  const diff = end.getTime() - now.getTime()

  const formatNumber = (num: number) => num.toString().padStart(2, '0')

  if (diff <= 0) return { days: '00', hours: '00', minutes: '00' }

  const days = formatNumber(Math.floor(diff / (1000 * 60 * 60 * 24)))
  const hours = formatNumber(Math.floor((diff / (1000 * 60 * 60)) % 24))
  const minutes = formatNumber(Math.floor((diff / (1000 * 60)) % 60))

  return { days, hours, minutes }
}
