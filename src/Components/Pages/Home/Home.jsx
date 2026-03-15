import React, { Suspense } from 'react'
import Banner from './Banner'
import Books from '../../Books/Books'



// loading data via axios promise and suspense

import axios from 'axios'
import { useLoaderData } from 'react-router'


const booksJson = async () => {

    const res = await axios.get('/booksData.json');
    return res.data;
    
}

const booksPromise = booksJson();
console.log(booksPromise)
// ---------------------------------------------

function Home() {

    //Loading data from json by loader in the routes section

    const books = useLoaderData();
    // console.log(books)

    return (
        <div>
            <Banner></Banner>
            {/* <Suspense fallback={'Loading...'}>
                <Books booksPromise={booksPromise}></Books>
            </Suspense> */}

             
            <Books books={books}></Books>
        </div>
    )
}

export default Home