import { ROUTE } from '@/routes/publicRoutes/route.enums'

export const PUBLIC_META = {
  [ROUTE.HOME]: {
    title: 'Home',
    description: 'Welcome to homepage'
  },
  [ROUTE.NOTFOUND]: {
    title: 'Not Found',
    description: 'This page is Not Found'
  },
  [ROUTE.TEST]: {
    title: 'Test',
    description: 'This page for testing'
  }
}
