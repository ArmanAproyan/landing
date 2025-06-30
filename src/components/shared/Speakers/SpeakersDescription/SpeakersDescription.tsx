import { useState } from 'react'
import { breakpoints } from '@/constants'
import { TextWrapper, Tooltip } from '@/components'
import { useClassNames, useWindowResize } from '@/hooks'
import { useTooltipPosition } from '@/hooks/tooltipPosition'
import { TSpeakersDescriptionProp } from './SpeakersDescription.types'

import styles from './SpeakersDescription.module.scss'

export const SpeakersDescription = ({ name, profession }: TSpeakersDescriptionProp) => {
  const { cn } = useClassNames('description', styles)
  const [textLines, setTextLines] = useState<number>(1)

  const handleChangeTextLines = () => {
    if (window.innerWidth <= breakpoints.laptop) {
      setTextLines(2)
    } else {
      setTextLines(1)
    }
  }

  useWindowResize(handleChangeTextLines)

  const {
    tooltipPos,
    containerRef,
    handleMouseMove,
    handleMouseEnter,
    handleMouseLeave,
    isTooltipVisible
  } = useTooltipPosition()

  const { x, y } = tooltipPos

  return (
    <div className={cn()} ref={containerRef}>
      <div className={cn('__wrapper')}>
        <p className={cn('__wrapper__name')}>{name}</p>
        <TextWrapper
          className={cn('__wrapper__profession')}
          onMouseEnter={handleMouseEnter}
          onMouseLeave={handleMouseLeave}
          onMouseMove={handleMouseMove}
          lines={textLines}
        >
          {profession}
        </TextWrapper>
      </div>

      {isTooltipVisible && <Tooltip x={x} y={y} text={profession} />}
    </div>
  )
}
