import React from 'react'
import { Star } from 'lucide-react';


function Book({ book }) {
    
    console.log(book)


    const { image, bookName, tags, author, category, rating }= book

  return (
      <div>
          <div className="card bg-base-100 w-96 lg:w-full mx-auto shadow-md p-4">
              <figure>
                  <img
                      className='size-full h-110 object-cover object-top'
                      src={image}
                      alt={bookName} />
                      
              </figure>
              <div className="card-body">
                  <div className='my-2'>
                      {tags.map(tag => <div className="badge badge-soft badge-success mr-2">{ tag}</div>)}
                  </div>
                  <h2 className="card-title ">{ bookName}</h2>
                  <p className='font-medium'>By { author}</p>
                  <div className="card-actions pt-6 border-t border-dashed">
                      <p className=''><span className='outline outline-success p-1 rounded-md'>{category}</span></p>
                      <div className='flex items-center justify-center gap-1'><span className='font-medium'>{rating}</span> <Star></Star>  </div>
                  </div>
              </div>
          </div>
    </div>
  )
}

export default Book