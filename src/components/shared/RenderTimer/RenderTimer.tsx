import { useClassNames } from '@/hooks'
import { TRenderTomerProps } from './RenderTimer.types'
import styles from './RenderTimer.module.scss'

export const RenderTimer = ({ timer }: TRenderTomerProps) => {
  const { days, hours, minutes, seconds } = timer
  const { cn } = useClassNames('timer', styles)
  const DAYS_DATA = ['DAYS', 'HOURS', 'MINUTES', 'SECONDS']

  return (
    <>
      {days !== '00' ? (
        <>
          <p className={cn('__seconds')}>
            {days}:{hours}:{minutes}
          </p>
          <div className={cn('__days')}>
            {DAYS_DATA.splice(0, 3).map((day, index) => (
              <span key={index}>{day}</span>
            ))}
          </div>
        </>
      ) : (
        <>
          <p className={cn('__seconds')}>
            {hours}:{minutes}:{seconds}
          </p>
          <div className={cn('__days')}>
            {DAYS_DATA.splice(1).map((day, index) => (
              <span key={index}>{day}</span>
            ))}
          </div>
        </>
      )}
    </>
  )
}
