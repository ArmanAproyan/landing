import { Helmet } from 'react-helmet-async'
import { THelmetProps } from './PageHelmet.types'

export const PageHelmet = ({
  title = 'Landing',
  description = 'Default description'
}: THelmetProps) => (
  <Helmet>
    <title>{title}</title>
    <meta name="description" content={description} />
  </Helmet>
)
