import { useEffect, useRef } from 'react'

export const useOutsideClick = <T extends Element>(callback: () => void, active = true) => {
  const ref = useRef<T | null>(null)

  useEffect(() => {
    if (!active) return

    const handleClick = (e: MouseEvent) => {
      if (ref.current && !ref.current.contains(e.target as Node)) {
        callback()
      }
    }

    document.addEventListener('mousedown', handleClick)

    return () => {
      document.removeEventListener('mousedown', handleClick)
    }
  }, [callback, active])

  return ref
}
