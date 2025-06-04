import { v4 as uuidv4 } from 'uuid'
import { User1, User2, User3, User4 } from '@/assets'
import { TCard, TUserList } from './FeaturesCard.types'

export const USERS_LIST: TUserList[] = [
  { id: uuidv4(), User: User1 },
  { id: uuidv4(), User: User4 },
  { id: uuidv4(), User: User3 },
  { id: uuidv4(), User: User2 }
]

export const Card_List: Record<'technologies' | 'networking' | 'speakers', TCard> = {
  technologies: {
    title: 'Technologies',
    description:
      'Explore advanced machine learning, natural language processing, AI-driven automation, and emerging cybersecurity applications.'
  },
  networking: {
    title: 'Networking Opportunities',
    description:
      'Enjoy exclusive networking sessions, roundtables, and social events to foster collaboration and spark new partnerships.'
  },
  speakers: {
    title: 'Speakers',
    description:
      'Hear from global AI leaders, researchers, and entrepreneurs who are defining the future of artificial intelligence.'
  }
}
