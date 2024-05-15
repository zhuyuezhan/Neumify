import { createBrowserRouter, RouterProvider, Navigate } from 'react-router-dom'
import { Layout, Home, Introduction, Design } from './pages'
import {
  Components,
  Buttons,
  TextInputs,
  Accordions,
  Sliders
} from './pages/Components'

const router = createBrowserRouter([
  {
    element: <Layout />,
    children: [
      {
        path: '/',
        element: <Home />
      },
      {
        path: 'components',
        element: <Components />,
        children: [
          { index: true, element: <Navigate to="/components/Button" /> },
          {
            path: 'Button',
            element: <Buttons />
          },
          {
            path: 'TextInput',
            element: <TextInputs />
          },
          {
            path: 'Accordion',
            element: <Accordions />
          },
          {
            path: 'Slider',
            element: <Sliders />
          }
        ]
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
