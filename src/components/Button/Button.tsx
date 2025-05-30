import { IconForButton } from '@/assets/icons'
import { TButtonProps } from './Button.type'
import { useClassNames } from '@/hooks'

import styles from './Button.module.scss'

export const Button = ({ children }: TButtonProps) => {
  const { cn } = useClassNames('button', styles)
  return (
    <div className={cn()}>
      {children}
      <IconForButton className={cn('__icon')} />
    </div>
  )
}
