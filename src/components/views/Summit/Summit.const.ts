import { TSummit } from './Summit.types'
import { SUMMIT_DATA } from '@/constants'
import { formatDateYearMonthDay } from '@/utils'

export const SUMMITS: TSummit[] = [
  {
    day: formatDateYearMonthDay(SUMMIT_DATA.day.from, SUMMIT_DATA.day.to),
    location: SUMMIT_DATA.place,
    title: 'NEXT-GEN AI SUMMIT',
    description:
      'Explore the cutting-edge innovations shaping the future of artificial intelligence. Join global leaders and visionaries for two days of insights, discussions, and breakthroughs.',
    actionLabel: 'Early bird tickets'
  }
]
