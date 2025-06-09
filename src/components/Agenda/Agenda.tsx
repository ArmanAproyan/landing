import { useClassNames } from '@/hooks'
import styles from './Agenda.module.scss'

export const Agenda = () => {
  const { cn } = useClassNames('agenda', styles)
  return (
    <div className={cn()}>
      <div className={cn('__header')}>
        <h3 className={cn('__header__title')}>AGENDA</h3>
        <p className={cn('__header__date')}>
          October 15-17, 2052 | Horizon <br /> Convention Center, Amsterdam
        </p>
      </div>
      <div className={cn('__container')}>
        <h1>Hello</h1>
      </div>
    </div>
  )
}
