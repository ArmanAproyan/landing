import { useClassNames } from '@/hooks'
import { CustomButton } from '../../shared/CustomButton'
import { SummitProps } from './Summit.types'

import styles from './Summit.module.scss'

export const Summit = ({ summitData }: SummitProps) => {
  const { cn } = useClassNames('container', styles)
  const { day, location, title, description, actionLabel } = summitData

  return (
    <div className={cn()}>
      <div className={cn('__dayLocation')}>
        <span>{day}</span>
        <span>{location}</span>
      </div>
      <div className={cn('__welcome__text')}>
        <h1 className={cn('__welcome__text__title')}>{title}</h1>
        <p className={cn('__welcome__text__description')}>{description}</p>
      </div>
      <div className={cn('__button__block')}>
        <CustomButton>{actionLabel}</CustomButton>
      </div>
    </div>
  )
}
