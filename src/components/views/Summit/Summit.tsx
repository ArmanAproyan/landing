import { useClassNames } from '@/hooks'
import { CustomButton } from 'components'
import { SummitProps } from './Summit.types'
import { Fragment } from 'react'
import { addBrAfterSentences } from '@/utils'

import styles from './Summit.module.scss'

export const Summit = ({ summitData }: SummitProps) => {
  const { cn } = useClassNames('summit', styles)
  const { day, location, title, description, actionLabel } = summitData

  const lines = addBrAfterSentences(description)

  return (
    <div className={cn()}>
      <div className={cn('__dayLocation')}>
        <span>{day}</span>
        <span>{location}</span>
      </div>
      <div className={cn('__welcome__text')}>
        <h1 className={cn('__welcome__text__title')}>{title}</h1>
        {/* <p className={cn('__welcome__text__description')}>{text}</p> */}
        <p className={cn('__welcome__text__description')}>
          {lines.map((line, index) => (
            <Fragment key={index}>
              {line}
              {index < lines.length - 1 && <br />}
            </Fragment>
          ))}
        </p>
      </div>
      <div className={cn('__button__block')}>
        <CustomButton>{actionLabel}</CustomButton>
      </div>
    </div>
  )
}
