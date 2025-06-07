import { Summit, Companies, FeatureCards } from '@/components'
import { useClassNames } from '@/hooks'
import { Agenda } from '@/components'
import { SUMMITS } from '@/components/views/Summit/Summit.const'

import styles from './Home.module.scss'

export const Home = () => {
  const { cn } = useClassNames('home', styles)

  const drawSummit = SUMMITS.map((summit, index) => <Summit key={index} summitData={summit} />)

  return (
    <div className={cn()}>
      {drawSummit}
      <Companies />
      <FeatureCards />
      <Agenda />
    </div>
  )
}
