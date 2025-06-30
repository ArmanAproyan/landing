import { useEffect, useState } from 'react'
import { breakpoints } from '@/constants'
import { useWindowResize } from './windowResize'

export const useIsLaptop = () => {
  const [isLaptop, setIsLaptop] = useState(false)

  const handleResize = () => {
    setIsLaptop(window.innerWidth <= breakpoints.laptop)
  }

  useWindowResize(handleResize)

  useEffect(() => {
    handleResize()
  }, [])

  return isLaptop
}
