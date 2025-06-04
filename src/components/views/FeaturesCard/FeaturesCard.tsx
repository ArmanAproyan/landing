import { useClassNames } from '@/hooks'
import { USERS_LIST } from './FeaturesCard.const'
import { Arrow, ArrowTopRightIcon } from '@/assets'
import { Card_List } from './FeaturesCard.const'

import styles from './FeaturesCard.module.scss'

export const FeatureCards = () => {
  const { cn } = useClassNames('feature__cards', styles)
  const { technologies, networking, speakers } = Card_List

  return (
    <div className={cn()}>
      <div className={cn('__speakers')}>
        <div className={cn('__speakers__header')}>
          <h3 className={cn('__speakers__header__title')}>{speakers.title}</h3>
        </div>
        <div className={cn('__speakers__description')}>
          <div className={cn('__speakers__icon')}>
            <Arrow width={74} height={74} />{' '}
          </div>
          <p className={cn('__speakers__description__title')}>{speakers.description}</p>
        </div>

        <div className={cn('__speakers__footer')}>
          <div className={cn('__speakers__footer__avatars')}>
            {USERS_LIST.map(({ id, User }) => {
              return (
                <div className={cn('__speakers__footer__avatars__item')} key={id}>
                  <User className={cn('__speakers__footer__avatars__item__svg')} />
                </div>
              )
            })}
          </div>
          <button className={cn('__speakers__footer__moreBtn')}>
            And more
            <ArrowTopRightIcon className={cn('__speakers__footer__moreBtn__item')} />
          </button>
        </div>
      </div>

      <div className={cn('__technologies')}>
        <div className={cn('__technologies__wrapper')}>
          <h3 className={cn('__technologies__wrapper__title')}>{technologies.title}</h3>
          <p className={cn('__technologies__wrapper__description')}>{technologies.description}</p>
        </div>
      </div>

      <div className={cn('__networking')}>
        <div className={cn('__networking__wrapper')}>
          <h3 className={cn('__networking__wrapper__title')}>{networking.title}</h3>
          <p className={cn('__networking__wrapper__description')}>{networking.description}</p>
        </div>
      </div>
    </div>
  )
}
