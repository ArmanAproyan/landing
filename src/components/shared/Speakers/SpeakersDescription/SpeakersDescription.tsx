import { useClassNames, useTooltipPosition } from '@/hooks'
import React, { useState, useRef } from 'react'
import { TSpeakersDescriptionProp } from './SpeakersDescription.types'

import styles from './SpeakersDescription.module.scss'

export const SpeakersDescription = ({ name, profession }: TSpeakersDescriptionProp) => {
  const { cn } = useClassNames('description', styles)
  const [tooltipVisible, setTooltipVisible] = useState(false)

  const containerRef = useRef<HTMLDivElement>(null)
  const [handleMouseMove, position] = useTooltipPosition(containerRef)
  const { x, y } = position

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
        <div className={cn('__tooltip')} style={{ top: y - 40, left: x }}>
          {profession}
        </div>
      )}
    </div>
  )
}
