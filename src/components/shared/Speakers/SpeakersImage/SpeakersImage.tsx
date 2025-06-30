import { useClassNames } from '@/hooks'
import { TSpeakersImageProp } from './SpeakersImage.types'

import styles from './SpeakersImage.module.scss'

export const SpeakersImage = ({ imgUrl, alt }: TSpeakersImageProp) => {
  const { cn } = useClassNames('image__wrapper', styles)
  return (
    <div className={cn()}>
      <div className={cn('__background')}></div>
      <img className={cn('__image')} src={imgUrl} alt={alt} />
    </div>
  )
}
