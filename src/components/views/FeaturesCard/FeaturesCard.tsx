import { useClassNames } from '@/hooks'
import { ArrowIcon } from '@/assets/icons'
import { Card_List } from './FeaturesCard.const'
import { USERS_LIST } from '@/constants'

import styles from './FeaturesCard.module.scss'
import { CustomButton, CardForFeature } from '@/components'

export const FeatureCards = () => {
  const { cn } = useClassNames('feature__cards', styles)
  const { technologies, networking, speakers } = Card_List

  const drawUserList = USERS_LIST.map(({ id, User }) => (
    <div className={cn('__speakers__footer__avatars__item')} key={id}>
      <User className={cn('__speakers__footer__avatars__item__svg')} />
    </div>
  ))

  return (
    <div className={cn()}>
      <div className={cn('__speakers')}>
        <div className={cn('__speakers__header')}>
          <h3 className={cn('__speakers__header__title')}>{speakers.title}</h3>
        </div>
        <div className={cn('__speakers__description')}>
          <div className={cn('__speakers__icon')}>
            <ArrowIcon />
          </div>
          <p className={cn('__speakers__description__title')}>{speakers.description}</p>
        </div>

        <div className={cn('__speakers__footer')}>
          <div className={cn('__speakers__footer__avatars')}>{drawUserList}</div>
          <CustomButton variant="secondary"> And more</CustomButton>
        </div>
      </div>
      <CardForFeature
        className={cn('__technologia')}
        variant="primary"
        title={technologies.title}
        description={technologies.description}
      />
      <CardForFeature
        variant="secondary"
        title={networking.title}
        description={networking.description}
      />
    </div>
  )
}
