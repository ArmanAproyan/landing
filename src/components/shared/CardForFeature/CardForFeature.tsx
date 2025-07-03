import { useClassNames } from '@/hooks'
import { TCardForFeatureProps } from './CardForFeature.types'

import styles from './CardForFeature.module.scss'

export const CardForFeature = ({
  variant = 'primary',
  title,
  description,
  className: classNameProp
}: TCardForFeatureProps) => {
  const { cn } = useClassNames('card', styles)

  const rootClassName = [cn('', { [variant]: true }), classNameProp].filter(Boolean).join(' ')

  return (
    <div className={rootClassName}>
      <div className={cn('__wrapper', { [variant]: true })}>
        <h3 className={cn('__wrapper__title', { [variant]: true })}>{title}</h3>
        <p className={cn('__wrapper__description', { [variant]: true })}>{description}</p>
      </div>
    </div>
  )
}
