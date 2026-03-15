import React from 'react'
import { createBrowserRouter } from 'react-router'
import Root from '../Root/Root'
import Home from '../Pages/Home/Home'
import ListedBooks from '../Pages/ListedBooks/ListedBooks'
import PagesToRead from '../Pages/PagesToRead/PagesToRead'
import ErrorPage from '../Pages/ErrorPage/ErrorPage'
import Signup from '../Pages/Signup/Signup'
import Login from '../Pages/Login/Login'


const router = createBrowserRouter([
    {
        path: '/',
        Component: Root,
        errorElement:<ErrorPage></ErrorPage>, 
        children: [
            {
                path: '/',
                loader:()=>fetch('/booksData.json'),
                Component: Home,
            },
            {
                path: '/listed-books',
                element: <ListedBooks />
            },
            {
                path: '/pages-to-read',
                element: <PagesToRead />
            }
        ]


    },
    {
        path: '/signup',
        Component:Signup,
    },
    {
        path: '/login',
        Component: Login,
    }
])

export default router