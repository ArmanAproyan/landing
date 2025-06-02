import { useClassNames } from '@/hooks'
import { SUMMIT_DATA } from './Summit.const'
import { CustomButton } from '../CustomButton'

import styles from './Summit.module.scss'

export const Summit = () => {
  const { cn } = useClassNames('container', styles)
  const { day, location, title, description } = SUMMIT_DATA
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
        <CustomButton>Early bird tickets</CustomButton>
      </div>
    </div>
  )
}
