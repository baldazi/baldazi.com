import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { createBrowserRouter } from "react-router";
import { RouterProvider } from "react-router/dom";
import './index.css'
import {AboutPage, ContactPage, ErrorPage, HomePage, ProjectPage, Root} from './pages';

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    errorElement: <ErrorPage />,
    children: [
      {path:"/", element:<HomePage/>},
      {path:"/project" , element:<ProjectPage/>},
      {path:"/about", element:<AboutPage/>},
      {path:"/contact", element:<ContactPage/>}
    ],
  },
])

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
)
