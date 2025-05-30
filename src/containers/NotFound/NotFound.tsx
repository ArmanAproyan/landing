import { useClassNames } from '@/hooks'
import { useNavigate } from 'react-router-dom'
import { ROUTE } from '@/routes'

import styles from './NotFound.module.scss'

export const NotFound = () => {
  const navigate = useNavigate()
  const { cn } = useClassNames('notFound', styles)

  return (
    <div className={cn()}>
      <h1>Not Found</h1>
      <div onClick={() => navigate(ROUTE.HOME)} className={cn('__home')}>
        Home
      </div>
    </div>
  )
}
