import React from 'react'
import { createBrowserRouter } from 'react-router'
import Root from '../Root/Root'
import Home from '../Pages/Home/Home'
import ListedBooks from '../Pages/ListedBooks/ListedBooks'
import PagesToRead from '../Pages/PagesToRead/PagesToRead'
import ErrorPage from '../Pages/ErrorPage/ErrorPage'
import Signup from '../Pages/Signup/Signup'
import Login from '../Pages/Login/Login'
import BookDetails from '../Pages/BooksDetails/BookDetails'
import axios from 'axios'


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
            // {
            // using loader via axios and es6 method
            //     path: '/details/:id',
            //     loader: async ({ params }) => {
            //         const response = await axios.get(`/booksData.json`);
            //         console.log(response.data)

            //         const bookDetails = response.data.find(book => `${book.bookId}` === `${params.id}`)
            //         console.log(params)
            //         // console.log(bookDetails)
            //         return bookDetails;
                    
                    
            //     },
            //     Component:BookDetails,
            // },
            {
                //Using use params 
                path: '/details/:id',
                loader: () => fetch('/booksData.json'),
                Component:BookDetails,
            },
            {
                path: '/listed-books',
                loader: () => fetch('/booksData.json'),
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