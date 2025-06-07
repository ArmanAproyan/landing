import { ArrowTopRightIcon } from '@/assets/icons/shared'
import { TCustomButtonProps } from './CustomButton.type'
import { useClassNames } from '@/hooks'
import classNames from 'classnames'

import styles from './CustomButton.module.scss'

export const CustomButton = ({
  isDisabled,
  onClick,
  children,
  className: classNameProp,
  IconComponent = ArrowTopRightIcon,
  showIcon = true,
  variant = 'primary'
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
