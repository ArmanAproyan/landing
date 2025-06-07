import { useClassNames } from '@/hooks'
import { TCardForFeatureProps } from './CardForFeature.types'

import classNames from 'classnames'
import styles from './CardForFeature.module.scss'

export const CardForFeature = ({
  variant = 'primary',
  title,
  description,
  className: classNameProp
}: TCardForFeatureProps) => {
  const { cn } = useClassNames('card', styles)
  return (
    <div className={classNames(cn(), cn(`--${variant}`), classNameProp)}>
      <div className={classNames(cn('__wrapper'), cn(`__wrapper--${variant}`))}>
        <h3 className={classNames(cn('__wrapper__title'), cn(`__wrapper__title--${variant}`))}>
          {title}
        </h3>
        <p
          className={classNames(
            cn('__wrapper__description'),
            cn(`__wrapper__description--${variant}`)
          )}
        >
          {description}
        </p>
      </div>
    </div>
  )
}
