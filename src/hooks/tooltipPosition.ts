import React, { RefObject, useState } from 'react'

export type ITooltip = {
  x: number
  y: number
}

export const useTooltipPosition = <T extends HTMLElement>(
  containerRef: RefObject<T>
): [(e: React.MouseEvent) => void, ITooltip] => {
  const [tooltipPos, setTooltipPos] = useState<ITooltip>({ x: 0, y: 0 })

  const handleMouseMove = (e: React.MouseEvent) => {
    if (containerRef.current) {
      const rect = containerRef.current.getBoundingClientRect()
      setTooltipPos({
        x: e.clientX - rect.left,
        y: e.clientY - rect.top
      })
    }
  }

  return [handleMouseMove, tooltipPos]
}
