import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import {
  RouterProvider,
} from "react-router-dom";
import { router } from './routes/routes.jsx';
import IdentityProvider from './provider/IdentityProvider';
import { Toaster } from 'react-hot-toast';

ReactDOM.createRoot(document.getElementById('root')).render(<IdentityProvider><RouterProvider router={router} /><Toaster /></IdentityProvider>)
