import { SVGProps } from 'react'

export type TCustomLinkIcon = {
  id: number
  name: string
  Icon: React.FC<SVGProps<SVGSVGElement>>
  href: string
}

export type TCustomLink = {
  linkData: TCustomLinkIcon[]
}
