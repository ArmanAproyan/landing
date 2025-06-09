import { NullableString } from '@/types'

export type TSummit = {
  day: NullableString
  title: NullableString
  location: NullableString
  description: NullableString
  actionLabel: NullableString
}

export type SummitProps = {
  summitData: TSummit
}
