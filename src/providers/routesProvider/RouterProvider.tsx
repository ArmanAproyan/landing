import { BrowserRouter, Route, Routes } from 'react-router-dom'
import { HelmetProvider } from 'react-helmet-async'
import { PUBLIC_ROUTES } from '@/routes'
import { TEST_ROUTES } from '@/routes/testRoutes/route'

export const RouterProvider = () => (
  <BrowserRouter>
    <HelmetProvider>
      <Routes>
        {PUBLIC_ROUTES.map(({ id, path, component }) => (
          <Route key={id} path={path} element={component} />
        ))}
        {TEST_ROUTES.map(({ id, path, component }) => (
          <Route key={id} path={path} element={component} />
        ))}
      </Routes>
    </HelmetProvider>
  </BrowserRouter>
)
