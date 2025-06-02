import { useClassNames } from '@/hooks'
import classNames from 'classnames'
import { TBurgerProps, LINE_ITEMS_COUNT } from './Burger.types'

import styles from './Burger.module.scss'

export const Burger = ({ isOpen, toggleMenu }: TBurgerProps) => {
  const { cn } = useClassNames('burger', styles)

  const drawBurgerItems = Array(LINE_ITEMS_COUNT)
    .fill(null)
    .map((_, id) => {
      return <span key={id} className={cn('__items')}></span>
    })

  return (
    <div className={classNames(cn(), { [cn('--open')]: isOpen })} onClick={toggleMenu}>
      {drawBurgerItems}
    </div>
  )
}
