export const startTimerDiff = (targetDate: string) => {
  const now = new Date()
  const end = new Date(targetDate)
  const diff = end.getTime() - now.getTime()

  const formatNumber = (num: number) => num.toString().padStart(2, '0')

  if (diff <= 0) return { days: '00', hours: '00', minutes: '00', seconds: '00' }
  const MILI_SECONDS = 1000
  const MINUTES = 60
  const SECONDS = 60
  const HOURS = 24

  const days = formatNumber(Math.floor(diff / (MILI_SECONDS * SECONDS * MINUTES * HOURS)))
  const hours = formatNumber(Math.floor((diff / (MILI_SECONDS * SECONDS * MINUTES)) % HOURS))
  const minutes = formatNumber(Math.floor((diff / (MILI_SECONDS * MINUTES)) % SECONDS))
  const seconds = formatNumber(Math.floor((diff / MILI_SECONDS) % SECONDS))

  return { days, hours, minutes, seconds }
}
