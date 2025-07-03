import { useEffect, useState } from 'react'

export const useResize = () => {
  const [windowSize, setWindowSize] = useState<number>(window.innerWidth)

  useEffect(() => {
    const handleResize = () => {
      setWindowSize(window.innerWidth)
    }
    window.addEventListener('resize', handleResize)

    return () => {
      window.removeEventListener('resize', handleResize)
    }
  }, [windowSize])

  return windowSize
}
