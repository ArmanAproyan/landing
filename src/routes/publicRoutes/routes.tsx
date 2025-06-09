import { PublicLayout } from '@/layouts'
import { PUBLIC_META } from '../metaRoutes'
import { PublicRouteNames, ROUTE } from './route.enums'
import { Home, NotFound, Test } from '@/containers'

export const PUBLIC_ROUTES = [
  {
    id: 1,
    name: PublicRouteNames.HOME,
    path: ROUTE.HOME,
    component: (
      <PublicLayout {...PUBLIC_META[ROUTE.HOME]}>
        <Home />
      </PublicLayout>
    )
  },
  {
    id: 2,
    name: PublicRouteNames.NOTFOUND,
    path: ROUTE.NOTFOUND,
    component: (
      <PublicLayout {...PUBLIC_META[ROUTE.NOTFOUND]} hasHeaderFooter={false}>
        <NotFound />
      </PublicLayout>
    )
  },
  {
    id: 3,
    name: PublicRouteNames.TEST,
    path: ROUTE.TEST,
    component: (
      <PublicLayout {...PUBLIC_META[ROUTE.TEST]} hasHeaderFooter={false}>
        <Test />
      </PublicLayout>
    )
  }
]
