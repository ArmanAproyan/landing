import { useClassNames } from '@/hooks'
import { TRenderTomerProps } from './RenderTimer.types'
import styles from './RenderTimer.module.scss'

export const RenderTimer = ({ timer }: TRenderTomerProps) => {
  const { days, hours, minutes, seconds } = timer
  const { cn } = useClassNames('timer', styles)

  const isDaysExist = days !== '00'
  const timeStr = isDaysExist ? `${days}:${hours}:${minutes}` : `${hours}:${minutes}:${seconds}`

  const labels = isDaysExist ? ['DAYS', 'HOURS', 'MINUTES'] : ['HOURS', 'MINUTES', 'SECONDS']

  return (
    <>
      <p className={cn('__time')}>{timeStr}</p>
      <div className={cn('__days')}>
        {labels.map((label, i) => (
          <span key={i}>{label}</span>
        ))}
      </div>
    </>
  )
}
