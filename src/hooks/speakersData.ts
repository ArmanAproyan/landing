import { breakpoints } from '@/constants'
import { useEffect, useState } from 'react'
import { useWindowResize } from './windowResize'
import { KEYNOTE_SPEAKERS_DATA } from '../components/views/KeynoteSpeakers/KeynoteSpeakers.const'

export const useSpeakersData = () => {
  const [breakpointsValue, setBreakpointsValue] = useState<number>(0)
  const [speakersData, setSpeakersData] = useState(KEYNOTE_SPEAKERS_DATA)

  const BREAKPOINT_MIN_VALUE = 1
  const BREAKPOINT_MAX_VALUE = 2

  const handleResize = () => {
    const width = window.innerWidth
    setBreakpointsValue(width < breakpoints.laptop ? BREAKPOINT_MIN_VALUE : BREAKPOINT_MAX_VALUE)
  }

  useWindowResize(handleResize)

  useEffect(() => {
    const updatedData = KEYNOTE_SPEAKERS_DATA.map((item, index) => {
      if (breakpointsValue === BREAKPOINT_MAX_VALUE) {
        const group = Math.floor(index / BREAKPOINT_MAX_VALUE)
        return { ...item, isReversed: group % BREAKPOINT_MAX_VALUE === BREAKPOINT_MIN_VALUE }
      }
      return { ...item, isReversed: index % BREAKPOINT_MAX_VALUE === BREAKPOINT_MIN_VALUE }
    })

    setSpeakersData(updatedData)
  }, [breakpointsValue])

  return { speakersData }
}
