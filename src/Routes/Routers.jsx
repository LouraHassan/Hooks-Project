import React from 'react'
import {
    createBrowserRouter,
} from "react-router-dom";
  import App from '../App'
import Chat from '../pages/Chat';
const Routers = createBrowserRouter([
    {
        path: '/',
        element: <App/>
    },
    {
        path: '/chat',
        element: <Chat/>
    }
])
export default Routers
