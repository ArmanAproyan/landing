import classNames from 'classnames'
import { Tooltip } from '@/components'
import { TextWrapper } from '../TextWrapper'
import styles from './WhyAttendItem.module.scss'
import { useCroppedText } from '@/hooks/croppedText'
import { useClassNames, useIsLaptop } from '@/hooks'
import { whyAttendItemProp } from './WhyAttendItem.types'
import { useTooltipPosition } from '@/hooks/tooltipPosition'

export const WhyAttendItem = ({ title, description, number, index }: whyAttendItemProp) => {
  const { cn } = useClassNames('why_attend_item', styles)
  const croppedDescription = useCroppedText(description, 100)
  const croppedTitle = useCroppedText(title, 30)
  const isTablet = useIsLaptop()
  const isReversed = Math.floor(index / (isTablet ? 1 : 2)) % 2 === 1

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
          <div className={cn('__title')}>{croppedTitle}</div>
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
              lines={4}
            >
              {croppedDescription}
            </TextWrapper>
            {isTooltipVisible && <Tooltip x={x} y={y} text={description} />}
          </div>
        </div>
      </div>
    </div>
  )
}
