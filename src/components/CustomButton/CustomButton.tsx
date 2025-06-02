import { ArrowTopRightIcon } from '@/assets/icons'
import { TButtonProps } from './CustomButton.type'
import { useClassNames } from '@/hooks'

import styles from './CustomButton.module.scss'

export const Button = ({ onClick, children }: TButtonProps) => {
  const { cn } = useClassNames('button', styles)
  return (
    <button className={cn()} onClick={onClick}>
      {children}
      <ArrowTopRightIcon className={cn('__icon')} />
    </button>
  )
}
