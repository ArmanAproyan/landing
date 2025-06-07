import { NullableString } from '@/types'

export type TAgenda = {
  id: number
  day: string
  startTime: NullableString
  endTime: NullableString
  title: string
  description: NullableString
}
