import { SVGProps } from 'react'
import { LinksEnum } from '@/constants/LinksData'

export type TCustomLinkIcon = {
  id: number
  name: LinksEnum
  Icon: React.FC<SVGProps<SVGSVGElement>>
  href: string
}

export type TCustomLink = {
  linkData: TCustomLinkIcon[]
}
