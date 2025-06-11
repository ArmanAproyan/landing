import { TCustomLinkIcon } from '@/components/shared/CustomLinks/CustomLink.types'
import { FacebookIcon, InstagramIcon, LinkedinIcon, YouTubeIcon } from '@/assets/icons'

export enum LinksEnum {
  Facebook = 'Facebook',
  Instagram = 'Instagram',
  Linkedin = 'Linkedin',
  YouTube = 'YouTube'
}

export const LinksData: TCustomLinkIcon[] = [
  { id: 1, name: LinksEnum.Facebook, Icon: FacebookIcon, href: '*' },
  { id: 2, name: LinksEnum.Instagram, Icon: InstagramIcon, href: '*' },
  { id: 3, name: LinksEnum.Linkedin, Icon: LinkedinIcon, href: '*' },
  { id: 4, name: LinksEnum.YouTube, Icon: YouTubeIcon, href: '*' }
]
