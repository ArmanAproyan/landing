import { useClassNames } from '@/hooks'
import { useNavigate } from 'react-router-dom'
import { TCustomLink } from './CustomLink.types'

import styles from './CustomLinks.module.scss'

export const CustomLinks = ({ linkData }: TCustomLink) => {
  const { cn } = useClassNames('links', styles)
  const navigate = useNavigate()

  const drawLinkData = linkData.map(({ id, Icon, href }) => (
    <div onClick={() => navigate(href)} key={id}>
      <Icon className={cn('__item')} />
    </div>
  ))

  return <div className={cn()}>{drawLinkData}</div>
}
