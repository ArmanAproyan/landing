import { useClassNames } from '@/hooks'
import { COMPANIES_LIST } from './Companies.const'

import styles from './Companies.module.scss'

export const Companies = () => {
  const { cn } = useClassNames('companies', styles)
  return (
    <div className={cn()}>
      {COMPANIES_LIST.map(({ id, Company }) => (
        <div key={id} className={cn('__item')}>
          <Company />
        </div>
      ))}
    </div>
  )
}
