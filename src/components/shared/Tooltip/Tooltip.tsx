import { useClassNames } from '@/hooks'
import { TooltipProps } from './Tooltip.const'

import styles from './Tooltip.module.scss'

export const Tooltip = ({ x, y, text }: TooltipProps) => {
  const { cn } = useClassNames('tooltip', styles)

  return (
    <div className={cn()} style={{ top: y - 40, left: x }}>
      {text}
    </div>
  )
}
