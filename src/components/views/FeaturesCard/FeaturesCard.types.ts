import { SVGProps } from 'react'

export type TUserList = {
  id: number
  User: React.ComponentType<SVGProps<SVGSVGElement>>
}

export type TCard = {
  title: string
  description: string
}
