import { useClassNames } from '@/hooks'
import { PublicLayoutProps } from './PublicLayout.types'
import { Footer, Header, PageHelmet } from '@/components'

import styles from './Layout.module.scss'

export const PublicLayout = ({
  title,
  children,
  description,
  hasHeaderFooter = true
}: PublicLayoutProps) => {
  const { cn } = useClassNames('layout', styles)

  return (
    <div className={cn()}>
      <PageHelmet title={title} description={description} />
      {hasHeaderFooter && <Header />}
      <main className={cn('__main')}>{children}</main>
      {hasHeaderFooter && <Footer />}
    </div>
  )
}
