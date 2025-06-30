import { useEffect } from 'react'

export const useWindowResize = (callBack: () => void) => {
  useEffect(() => {
    callBack()

    window.addEventListener('resize', callBack)
    return () => {
      window.removeEventListener('resize', callBack)
    }
  }, [callBack])
}
