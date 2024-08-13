import React from 'react'
// import ReactDOM from 'react-dom/client'
import * as ReactDOM from "react-dom/client";
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import App from './App.jsx'
import './index.css'
import Landing from "./pages/Landing.jsx"
import Login from './pages/Login.jsx';
import Info from './pages/Info.jsx'

const router = createBrowserRouter([
    {
        path: "/",
        element: <Login/>
    },
    {
        path: "/landing",
        element: <Landing/>
    },
    {
        path: "/info",
        element :<Info/>
    }
])
ReactDOM.createRoot(document.getElementById('root')).render(
    <>
    <RouterProvider router={router} />
    
    </>
)
