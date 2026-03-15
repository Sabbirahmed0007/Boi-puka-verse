import React, { Suspense } from 'react'
import Banner from './Banner'
import Books from '../../Books/Books'

import axios from 'axios'


const booksJson = async () => {

    const res = await axios.get('/booksData.json');
    return res.data;
    
}

const booksPromise = booksJson();
console.log(booksPromise)

function Home() {
    return (
        <div>
            <Banner></Banner>
            <Suspense fallback={'Loading...'}>
                <Books booksPromise={booksPromise}></Books>

            </Suspense>
        </div>
    )
}

export default Home