import styles from './Overlay.module.scss'
import { useClassNames } from '@/hooks'

export const Overlay = () => {
  const { cn } = useClassNames('overlay', styles)
  return <div className={cn()}></div>
}
