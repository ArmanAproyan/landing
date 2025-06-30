import { useRef, useState } from 'react'

type TooltipPosition = {
  x: number
  y: number
}

export const useTooltipPosition = <T extends HTMLElement = HTMLDivElement>() => {
  const containerRef = useRef<T | null>(null)
  const [isTooltipVisible, setIsTooltipVisible] = useState(false)
  const [tooltipPos, setTooltipPos] = useState<TooltipPosition>({ x: 0, y: 0 })

  const handleMouseMove = (e: React.MouseEvent) => {
    if (containerRef.current) {
      const rect = containerRef.current.getBoundingClientRect()
      setTooltipPos({
        x: e.clientX - rect.left,
        y: e.clientY - rect.top
      })
    }
  }
  const handleMouseEnter = () => setIsTooltipVisible(true)
  const handleMouseLeave = () => setIsTooltipVisible(false)

  return {
    tooltipPos,
    containerRef,
    handleMouseMove,
    handleMouseEnter,
    handleMouseLeave,
    isTooltipVisible
  }
}
