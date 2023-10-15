import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { RouterProvider } from 'react-router-dom'
import router from './router.jsx'
import { ContextProvider } from './contexts/ContextProvider.jsx'

ReactDOM.createRoot(document.getElementById('root')).render(
  // make callback twice
  <React.StrictMode>
    {/* Use Context Provider for API*/}
    <ContextProvider>
      {/* Use Router Provider */}
      <RouterProvider router={router} />
    </ContextProvider>
  </React.StrictMode>,
)
