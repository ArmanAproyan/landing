import { useEffect, useState } from 'react'
import { breakpoints } from '@/constants'
import { KEYNOTE_SPEAKERS_DATA } from '../components/views/KeynoteSpeakers/KeynoteSpeakers.const'

export const useSpeakersData = () => {
  const [breakpointsValue, setBreakpointsValue] = useState<number>(0)
  const [speakersData, setSpeakersData] = useState(KEYNOTE_SPEAKERS_DATA)

  useEffect(() => {
    const handleResize = () => {
      const width = window.innerWidth
      setBreakpointsValue(width < breakpoints.desktop ? 1 : 2)
    }

    window.addEventListener('resize', handleResize)
    handleResize()
    return () => window.removeEventListener('resize', handleResize)
  }, [])

  useEffect(() => {
    const updatedData = KEYNOTE_SPEAKERS_DATA.map((item, index) => {
      if (breakpointsValue === 2) {
        const group = Math.floor(index / 2)
        return { ...item, isReversed: group % 2 === 1 }
      }
      return { ...item, isReversed: index % 2 === 1 }
    })

    setSpeakersData(updatedData)
  }, [breakpointsValue])

  return { speakersData }
}
