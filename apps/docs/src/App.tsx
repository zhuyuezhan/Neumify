import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import { Layout, Home, Document, Introduction, Design } from './pages'

const router = createBrowserRouter([
  {
    element: <Layout />,
    children: [
      {
        path: '/',
        element: <Home />
      },
      {
        path: 'docs',
        element: <Document />
      },
      {
        path: 'intro',
        element: <Introduction />
      },
      {
        path: 'design',
        element: <Design />
      }
    ]
  }
])

const App = () => {
  return <RouterProvider router={router} />
}

export default App
