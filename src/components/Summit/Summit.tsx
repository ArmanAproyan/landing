import { useClassNames } from '@/hooks'
import { SUMMIT_DATA } from './Summit.const'
import { Button } from '../Button'

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
        <h1 className={cn('__welcome__text__h1')}>{title}</h1>
        <p className={cn('__welcome__text__p')}>{description}</p>
      </div>
      <div className={cn('__button__block')}>
        <Button>Early bird tickets</Button>
      </div>
    </div>
  )
}
