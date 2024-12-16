import React from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'

import { RouterProvider } from 'react-router-dom'
import router from './Core/Routes.jsx'
import AuthProvider from './Core/Auth/AuthProvider.jsx'

createRoot(document.getElementById('root')).render(
<AuthProvider>
<React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
</AuthProvider>
)
