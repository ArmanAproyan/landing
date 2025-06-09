import { startTimerDiff } from '@/utils'
import { useEffect, useState } from 'react'

export const useTimer = (targetDateISO: string) => {
  const [timeLeft, setTimeLeft] = useState(startTimerDiff(targetDateISO))

  useEffect(() => {
    const interval = setInterval(() => {
      setTimeLeft(startTimerDiff(targetDateISO))
    }, 60 * 1000)

    return () => clearInterval(interval)
  }, [targetDateISO])

  return `${timeLeft.days}:${timeLeft.hours}:${timeLeft.minutes}`
}
