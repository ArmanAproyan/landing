import { useState } from 'react'
import { Heading } from '../../shared/Heading'
import { useClassNames, useSpeakersData } from '@/hooks'
import { CustomButton } from '../../shared/CustomButton'
import { SpeakersCard } from '../../shared/Speakers/SpeakersCard'

import styles from './KeynoteSpeakers.module.scss'

export const KeynoteSpeakers = () => {
  const { cn } = useClassNames('speakers', styles)
  const { speakersData } = useSpeakersData()

  const [isShowMore, setIsShowMore] = useState(false)

  const visibleSpeakers = isShowMore ? speakersData : speakersData.slice(0, 4)

  const toggleShowMore = () => setIsShowMore((prev) => !prev)

  return (
    <div className={cn()}>
      <Heading
        title="KEYNOTE SPEAKERS"
        description="Meet the industry leaders shaping the future of AI."
      />
      <div className={cn('__items')}>
        {visibleSpeakers.map(({ id, name, profession, img, isReversed }) => (
          <SpeakersCard
            key={id}
            name={name}
            profession={profession}
            img={img}
            isReversed={isReversed}
          />
        ))}
      </div>

      <CustomButton onClick={toggleShowMore} className={cn('__button')} variant="secondary">
        <p>{isShowMore ? 'And Less' : 'And More'}</p>
      </CustomButton>
    </div>
  )
}
