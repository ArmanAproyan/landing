import { useClassNames } from '@/hooks'
import { AGENDA_INFO, AGENDA_DATE } from './Agenda.const'
import { CustomButton } from '../../shared/CustomButton'

import styles from './Agenda.module.scss'

export const Agenda = () => {
  const { cn } = useClassNames('agenda', styles)
  return (
    <div className={cn()}>
      <div className={cn('__header')}>
        <h3 className={cn('__header__title')}>AGENDA</h3>
        <p className={cn('__header__date')}>
          {AGENDA_DATE.date}
          <br />
          {AGENDA_DATE.location}
        </p>
      </div>
      <div className={cn('__container')}>
        <div className={cn('__container__information')}>
          {AGENDA_INFO.map(({ id, day, time, title, description }) => {
            return (
              <div className={cn('__container__information__block')} key={id}>
                <div className={cn('__container__information__dayAndTime')}>
                  <span className={cn('__container__information__dayAndTime__day')}>{day}</span>
                  <span className={cn('__container__information__dayAndTime__time')}>{time}</span>
                </div>
                <div className={cn('__container__information__titleAndDescription')}>
                  <span className={cn('__container__information__titleAndDescription__title')}>
                    {title}
                  </span>
                  <span
                    className={cn('__container__information__titleAndDescription__description')}
                  >
                    {description}
                  </span>
                </div>
              </div>
            )
          })}
        </div>
        <div className={cn('__container__footer')}>
          <div className={cn('__container__footer__button')}>
            <CustomButton className={styles.button}>View detailed schedule </CustomButton>
          </div>
        </div>
      </div>
    </div>
  )
}
