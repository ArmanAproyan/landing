import { Tooltip } from '@/components'
import { useClassNames } from '@/hooks'
import { useTooltipPosition } from '@/hooks/tooltipPosition'
import { TSpeakersDescriptionProp } from './SpeakersDescription.types'

import styles from './SpeakersDescription.module.scss'

export const SpeakersDescription = ({ name, profession }: TSpeakersDescriptionProp) => {
  const { cn } = useClassNames('description', styles)

  const {
    containerRef,
    tooltipPos,
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
        <p
          className={cn('__wrapper__profession')}
          onMouseEnter={handleMouseEnter}
          onMouseLeave={handleMouseLeave}
          onMouseMove={handleMouseMove}
        >
          {profession}
        </p>
      </div>

      {isTooltipVisible && <Tooltip x={x} y={y} text={profession} />}
    </div>
  )
}
