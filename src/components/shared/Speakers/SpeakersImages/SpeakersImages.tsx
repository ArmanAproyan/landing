import { useClassNames } from '@/hooks'
import { TSpeakersImagesProp } from './SpeakersImage.types'

import styles from './SpeakersImages.module.scss'

export const SpeakersImages = ({ img }: TSpeakersImagesProp) => {
  const { cn } = useClassNames('image__wrapper', styles)
  return (
    <div className={cn()}>
      <div className={cn('__background')}></div>
      <img className={cn('__image')} src={img} alt="" />
    </div>
  )
}
