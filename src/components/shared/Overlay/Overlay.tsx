import { useClassNames } from '@/hooks'

import styles from './Overlay.module.scss'

export const Overlay = () => {
  const { cn } = useClassNames('overlay', styles)
  return <div className={cn()}></div>
}
