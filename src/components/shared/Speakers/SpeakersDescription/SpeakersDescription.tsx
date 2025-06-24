import { useClassNames } from '@/hooks'
import React, { useState, useRef } from 'react'
import { TSpeakersDescriptionProp } from './SpeakersDescription.types'

import styles from './SpeakersDescription.module.scss'

export const SpeakersDescription = ({ name, profession }: TSpeakersDescriptionProp) => {
  const { cn } = useClassNames('description', styles)
  const [tooltipVisible, setTooltipVisible] = useState(false)
  const [tooltipPos, setTooltipPos] = useState({ x: 0, y: 0 })

  const containerRef = useRef<HTMLDivElement>(null)

  const handleMouseMove = (e: React.MouseEvent) => {
    if (containerRef.current) {
      const rect = containerRef.current.getBoundingClientRect()
      setTooltipPos({
        x: e.clientX - rect.left,
        y: e.clientY - rect.top
      })
    }
  }

  return (
    <div className={cn()} ref={containerRef}>
      <div className={cn('__wrapper')}>
        <p className={cn('__wrapper__name')}>{name}</p>
        <p
          className={cn('__wrapper__profession')}
          onMouseEnter={() => setTooltipVisible(true)}
          onMouseLeave={() => setTooltipVisible(false)}
          onMouseMove={handleMouseMove}
        >
          {profession}
        </p>
      </div>

      {tooltipVisible && (
        <div className={cn('__tooltip')} style={{ top: tooltipPos.y - 40, left: tooltipPos.x }}>
          {profession}
        </div>
      )}
    </div>
  )
}
