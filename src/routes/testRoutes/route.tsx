import { PublicLayout } from '@/layouts'
import { Test } from '@/components'

export const TEST_ROUTES = [
  {
    id: 1,
    name: 'test',
    path: '/test',
    component: (
      <PublicLayout hasHeaderFooter={false} title="test" description="test">
        <Test />
      </PublicLayout>
    )
  }
]
