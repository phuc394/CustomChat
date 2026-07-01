import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './styles/global.css'
import {RouterProvider, createBrowserRouter} from 'react-router-dom';
import Home from './pages/Home/Home';
import ChatRoom from './pages/ChatRoom/ChatRoom';

const router = createBrowserRouter([
  {
    path: '/',
    element: <Home />
  },
  {
    path: '/chatroom/:id',
    element: <ChatRoom />
  }
])

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>
)
