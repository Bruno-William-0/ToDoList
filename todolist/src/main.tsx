import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import './index.css'
import Home from './components/pages/index.tsx'
import { ChakraProvider, defaultSystem } from '@chakra-ui/react'

const rotas = createBrowserRouter(
  [{path: '/', element:<Home/>}]
)

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <ChakraProvider value={defaultSystem}>
    <RouterProvider router={rotas}/>
    </ChakraProvider>
  </StrictMode>
)
