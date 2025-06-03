import { Summit, Companies, FeatureCards } from '@/components'
import { useClassNames } from '@/hooks'
import { Agenda } from '@/components'

import styles from './Home.module.scss'

export const Home = () => {
  const { cn } = useClassNames('home', styles)
  return (
    <div className={cn()}>
      <Summit />
      <Companies />
      <FeatureCards />
      <Agenda />
    </div>
  )
}
