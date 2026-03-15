import React, { use } from 'react'
import { useState } from 'react'
import Book from './Book';



function Books({ booksPromise }) {

    const books = use(booksPromise);

    // console.log(books)

    
 
  return (
      <div className='py-10'>
          
          <div className='text-center mb-4'>
              <h1 className='text-4xl font-bold'>Books</h1>
          </div>
          <div className='grid grid-cols-1 md:grid-cols-3 items-center justify-center gap-5'>
              {
                  books.map(book=><Book key={book.id} book={book}></Book>)
              }
          </div>
          
    </div>
  )
}

export default Books