import { useEffect, useState } from 'react'
import { breakpoints } from '@/constants'
import { useWindowResize } from './windowResize'

export const useIsTablet = () => {
  const [isTablet, setIsTablet] = useState(false)

  const handleResize = () => {
    setIsTablet(window.innerWidth <= breakpoints.tablet)
  }

  useWindowResize(handleResize)

  useEffect(() => {
    handleResize()
  }, [])

  return isTablet
}
