import { TextWrapper } from '../TextWrapper'
import { useClassNames, useIsLaptop } from '@/hooks'
import { whyAttendItemProp } from './WhyAttendItem.types'
import { MAX_LINE, MIN_LINE, TITLE_LINE } from './WhyAttendItem.const'

import styles from './WhyAttendItem.module.scss'

export const WhyAttendItem = ({ title, description, number, index }: whyAttendItemProp) => {
  const { cn } = useClassNames('why_attend_item', styles)
  const isTablet = useIsLaptop()
  const isReversed = Math.floor(index / (isTablet ? 1 : 2)) % 2 === 1
  const TabletLines = isTablet ? MIN_LINE : MAX_LINE

  return (
    <div className={cn()}>
      <div className={cn('__item')}>
        <div
          className={cn('__title_block', {
            reversed_title: isReversed
          })}
        >
          <div className={cn('__title')}>
            <TextWrapper lines={TITLE_LINE}>{title}</TextWrapper>
          </div>
        </div>
        <div
          className={cn('__description_block', {
            reversed_description: isReversed
          })}
        >
          <div className={cn('__numbers')}>
            <span className={cn('__number')}>{number}</span>
          </div>
          <div className={cn('__description')}>
            <TextWrapper lines={TabletLines}>{description}</TextWrapper>
          </div>
        </div>
      </div>
    </div>
  )
}
