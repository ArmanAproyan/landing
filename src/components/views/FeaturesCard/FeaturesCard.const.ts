import { TCard } from './FeaturesCard.types'

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
