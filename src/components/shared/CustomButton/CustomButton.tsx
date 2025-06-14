import classNames from 'classnames'
import { useClassNames } from '@/hooks'
import { ArrowTopRightIcon } from '@/assets/icons/shared'
import { TCustomButtonProps } from './CustomButton.type'

import styles from './CustomButton.module.scss'

export const CustomButton = ({
  onClick,
  children,
  isDisabled,
  showIcon = true,
  variant = 'primary',
  className: classNameProp,
  IconComponent = ArrowTopRightIcon
}: TCustomButtonProps) => {
  const { cn } = useClassNames('button', styles)

  return (
    <button
      disabled={isDisabled}
      onClick={isDisabled ? undefined : onClick}
      className={classNames(cn(), cn(`--${variant}`), classNameProp)}
    >
      {children}
      {IconComponent && showIcon && <IconComponent className={cn('__icon')} />}
    </button>
  )
}
