import { useClassNames } from '@/hooks'
import { AGENDA_INFO } from './Agenda.const'
import { AGENDA_DATA } from '@/constants'
import { formatDateYearMonthDay, timeUtil } from '@/utils'
import { CustomButton } from '@/components'

import styles from './Agenda.module.scss'

export const Agenda = () => {
  const { place } = AGENDA_DATA
  const { cn } = useClassNames('agenda', styles)

  const formattedDateRange = formatDateYearMonthDay(AGENDA_DATA.day.from, AGENDA_DATA.day.to)

  const drawAgenta = AGENDA_INFO.map(({ id, day, startTime, endTime, title, description }) => {
    return (
      <div className={cn('__container__information__block')} key={id}>
        <div className={cn('__container__information__dayAndTime')}>
          <span className={cn('__container__information__dayAndTime__day')}>{day}</span>
          <span className={cn('__container__information__dayAndTime__time')}>
            {timeUtil(startTime, endTime)}
          </span>
        </div>
        <div className={cn('__container__information__titleAndDescription')}>
          <span className={cn('__container__information__titleAndDescription__title')}>
            {title}
          </span>
          <span className={cn('__container__information__titleAndDescription__description')}>
            {description}
          </span>
        </div>
      </div>
    )
  })

  return (
    <div className={cn()}>
      <div className={cn('__header')}>
        <h3 className={cn('__header__title')}>AGENDA</h3>
        <p className={cn('__header__date')}>
          {formattedDateRange} {' | '}
          {place}
        </p>
      </div>
      <div className={cn('__container')}>
        <div className={cn('__container__information')}>{drawAgenta}</div>
        <div className={cn('__container__footer')}>
          <div className={cn('__container__footer__button')}>
            <CustomButton variant="primary" className={cn('__container__footer__button__item')}>
              View detailed schedule{' '}
            </CustomButton>
          </div>
        </div>
      </div>
    </div>
  )
}
