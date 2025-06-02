import { useClassNames } from '@/hooks'
import { BsArrowRight } from 'react-icons/bs'

import styles from './FeaturesCard.module.scss'
import { Arrow, User1, User2, User3, User4 } from '@/assets'

export const FeatureCards = () => {
  const { cn } = useClassNames('feature__cards', styles)

  console.log('test')

  return (
    <div className={cn()}>
      <div className={cn('__speakers')}>
        <div className={cn('__speakers__header')}>
          <h3 className={cn('__speakers__header__title')}>Speakers</h3>
        </div>
        <div className={cn('__speakers__description')}>
          <div className={cn('__speakers__icon')}>
            <Arrow width={74} height={74} />
          </div>
          <p className={cn('__speakers__description__title')}>
            Hear from global AI leaders, researchers, and entrepreneurs who are defining the future
            of artificial intelligence.
          </p>
        </div>

        <div className={cn('__footer')}>
          <div className={cn('__footer__avatars')}>
            <User1 className={cn('__footer__avatars__item')} />
            <User4 className={cn('__footer__avatars__item')} />
            <User3 className={cn('__footer__avatars__item')} />
            <User2 className={cn('__footer__avatars__item')} />
          </div>
          <button className={cn('__footer__moreBtn')}>
            And more
            <BsArrowRight />
          </button>
        </div>
      </div>

      <div className={cn('__technologies')}>
        <div className={cn('__header')}>
          <h3>Technologies</h3>
        </div>
        <p>
          Explore advanced machine learning, natural language processing, AI-driven automation, and
          emerging cybersecurity applications.
        </p>
      </div>

      <div className={cn('__networking')}>
        <div className={cn('__header')}>
          <h3>Networking Opportunities</h3>
        </div>
        <p>
          Enjoy exclusive networking sessions, roundtables, and social events to foster
          collaboration and spark new partnerships.
        </p>
      </div>
    </div>
  )
}
