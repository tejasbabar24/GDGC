import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import './index.css'
import App from './App.jsx'
import Home from './Pages/Home.jsx'
import Projects from './Pages/Projects.jsx'
import Events from './Pages/Events.jsx'



// Define routes
const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,   // App has <Outlet />
    children: [
      
      {
        path: "/",
        element: <Home/>  
      },
      {
        path: "/projects",
        element:<Projects/>  
      },
      {
        path: "/events",
        element:<Events/>  
      }
    ]
  }
])

createRoot(document.getElementById('root')).render(
  
    <RouterProvider router={router} />
)
