// import classNames from 'classnames'
import { useClassNames } from '@/hooks'
import { SpeakersDescription, SpeakersImage } from 'components'
import { TSpeakersCardProp } from './SpeakersCard.type'

import styles from './SpeakersCard.module.scss'

export const SpeakersCard = ({ name, profession, imgUrl, isReversed, alt }: TSpeakersCardProp) => {
  const { cn } = useClassNames('speakers-card', styles)

  return (
    <div
      className={cn('', {
        reversed: isReversed
      })}
    >
      <SpeakersDescription name={name} profession={profession} />
      <SpeakersImage imgUrl={imgUrl} alt={alt} />
    </div>
  )
}
