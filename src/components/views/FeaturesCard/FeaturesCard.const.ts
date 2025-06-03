import { v4 as uuidv4 } from 'uuid'
import { User1, User2, User3, User4 } from '@/assets'
import { TCard, TUserList } from './FeaturesCard.types'

export const USERS_LIST: TUserList[] = [
  { id: uuidv4(), User: User1 },
  { id: uuidv4(), User: User2 },
  { id: uuidv4(), User: User3 },
  { id: uuidv4(), User: User4 }
]

export const Card_List: Record<'technologies' | 'networking' | 'speakers', TCard> = {
  technologies: {
    title: 'Technologies',
    description:
      'Hear from global AI leaders, researchers, and entrepreneurs who are defining the future of artificial intelligence'
  },
  networking: {
    title: 'Networking',
    description:
      'Explore advanced machine learning, natural language processing, AI-driven automation,and emerging cybersecurity applications.'
  },
  speakers: {
    title: 'Speakers',
    description:
      'Enjoy exclusive networking sessions, roundtables, and social events to fostercollaboration and spark new partnerships.'
  }
}
