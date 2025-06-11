import { TTimeLeft } from '@/types'
import { startTimerDiff } from '@/utils'
import { useEffect, useState } from 'react'

export const useTimer = (targetDateISO: string) => {
  const [timeLeft, setTimeLeft] = useState<TTimeLeft>(startTimerDiff(targetDateISO))

  useEffect(() => {
    const interval = setInterval(() => {
      setTimeLeft(startTimerDiff(targetDateISO))
    }, 1000)
    return () => clearInterval(interval)
  }, [targetDateISO])

  return timeLeft
}
