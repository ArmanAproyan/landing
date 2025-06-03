import { useClassNames } from '@/hooks'
import { Amazon, Gumroad, Dribbble, Hubspot, Notion } from '@/assets'

import styles from './Companies.module.scss'

export const Companies = () => {
  const { cn } = useClassNames('companies', styles)
  return (
    <div className={cn()}>
      <Amazon />
      <Dribbble />
      <Hubspot />
      <Notion />
      <Gumroad />
    </div>
  )
}
