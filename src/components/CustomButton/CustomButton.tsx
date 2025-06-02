import { ArrowTopRightIcon } from '@/assets/icons'
import { TButtonProps } from './CustomButton.type'
import { useClassNames } from '@/hooks'

import styles from './CustomButton.module.scss'

export const CustomButton = ({
  isDisabled,
  onClick,
  children,
  IconComponent = ArrowTopRightIcon
}: TButtonProps) => {
  const { cn } = useClassNames('button', styles)
  return (
    <button onClick={isDisabled ? undefined : onClick} className={cn()}>
      {children}
      {<IconComponent className={cn('__icon')} />}
    </button>
  )
}
