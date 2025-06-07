import { useClassNames } from '@/hooks'
import { THeadingProps } from './Heading.types'
import styles from './Heading.module.scss'

export const Heading = ({ title, description }: THeadingProps) => {
  const { cn } = useClassNames('heading', styles)
  return (
    <div className={cn()}>
      <h3 className={cn('__title')}>{title}</h3>
      <p className={cn('__date')}>{description}</p>
    </div>
  )
}
