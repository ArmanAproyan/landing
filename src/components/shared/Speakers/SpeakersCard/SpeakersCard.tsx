import classNames from 'classnames'
import { useClassNames } from '@/hooks'
import { SpeakersDescription, SpeakersImages } from 'components'
import { TSpeakersCardProp } from './SpeakersCard.type'

import styles from './SpeakersCard.module.scss'

export const SpeakersCard = ({ name, profession, img, isReversed }: TSpeakersCardProp) => {
  const { cn } = useClassNames('speakers-card', styles)

  return (
    <div
      className={classNames(cn(), {
        [cn('__reversed')]: isReversed
      })}
    >
      <SpeakersDescription name={name} profession={profession} />
      <SpeakersImages img={img} />
    </div>
  )
}
