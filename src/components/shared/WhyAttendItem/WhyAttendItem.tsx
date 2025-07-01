import classNames from 'classnames'
import { Tooltip } from '@/components'
import { TextWrapper } from '../TextWrapper'
import { useClassNames, useIsLaptop } from '@/hooks'
import { whyAttendItemProp } from './WhyAttendItem.types'
import { MAX_LINE, MIN_LINE, TITLE_LINE } from './WhyAttendItem.const'
import { useTooltipPosition } from '@/hooks/tooltipPosition'

import styles from './WhyAttendItem.module.scss'

export const WhyAttendItem = ({ title, description, number, index }: whyAttendItemProp) => {
  const { cn } = useClassNames('why_attend_item', styles)
  const isTablet = useIsLaptop()
  const isReversed = Math.floor(index / (isTablet ? 1 : 2)) % 2 === 1
  const TabletLines = isTablet ? MIN_LINE : MAX_LINE

  const {
    tooltipPos,
    containerRef,
    handleMouseMove,
    isTooltipVisible,
    handleMouseEnter,
    handleMouseLeave
  } = useTooltipPosition()

  const { x, y } = tooltipPos

  return (
    <div ref={containerRef} className={cn()}>
      <div className={cn('__item')}>
        <div
          className={classNames(cn('__title_block'), {
            [cn('reversed_title')]: isReversed
          })}
        >
          <div className={cn('__title')}>
            <TextWrapper lines={TITLE_LINE}>{title}</TextWrapper>
          </div>
        </div>
        <div
          className={classNames(cn('__description_block'), {
            [cn('reversed_description')]: isReversed
          })}
        >
          <div className={cn('__numbers')}>
            <span className={cn('__number')}>{number}</span>
          </div>
          <div className={cn('__description')}>
            <TextWrapper
              onMouseMove={handleMouseMove}
              onMouseEnter={handleMouseEnter}
              onMouseLeave={handleMouseLeave}
              lines={TabletLines}
            >
              {description}
            </TextWrapper>
            {isTooltipVisible && <Tooltip x={x} y={y} text={description} />}
          </div>
        </div>
      </div>
    </div>
  )
}
