import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import {
  QueryClient,
  QueryClientProvider,
} from '@tanstack/react-query'
import {
  RouterProvider,
} from "react-router-dom";
import { router } from './routes/routes.jsx';
import IdentityProvider from './provider/IdentityProvider';
import { Toaster } from 'react-hot-toast';

const queryClient = new QueryClient()

ReactDOM.createRoot(document.getElementById('root')).render(<IdentityProvider><QueryClientProvider client={queryClient}>
  <RouterProvider router={router} />
</QueryClientProvider><Toaster /></IdentityProvider>)
