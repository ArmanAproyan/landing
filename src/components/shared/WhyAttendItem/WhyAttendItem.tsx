import classNames from 'classnames'
import { useClassNames } from '@/hooks'
import { breakpoints } from '@/constants'
import { whyAttendItemProp } from './WhyAttendItem.types'

import styles from './WhyAttendItem.module.scss'
import { useResize } from '@/hooks/resize'
import { useCroppedText } from '@/hooks/croppedText'

export const WhyAttendItem = ({ title, description, number, index }: whyAttendItemProp) => {
  const { cn } = useClassNames('why_attend_item', styles)
  const innerWidth = useResize()
  const croppedDescription = useCroppedText(description, 100)
  const croppedTitle = useCroppedText(title, 30)

  const isTablet = innerWidth <= breakpoints.desktop
  const isReversed = Math.floor(index / (isTablet ? 1 : 2)) % 2 === 1

  return (
    <div className={cn()}>
      <div className={cn('__item')}>
        <div
          className={classNames(cn('__item__title_block'), {
            [styles.reversedTitle]: isReversed
          })}
        >
          <div className={cn('__item__title_block__title')}>{croppedTitle}</div>
        </div>
        <div
          className={classNames(cn('__item__description_block'), {
            [styles.reversedDescription]: isReversed
          })}
        >
          <div className={cn('__item__numbers')}>
            <span className={cn('__item__numbers__number')}>{number}</span>
          </div>
          <div className={cn('__item__description_block__description')}>{croppedDescription}</div>
        </div>
      </div>
    </div>
  )
}
