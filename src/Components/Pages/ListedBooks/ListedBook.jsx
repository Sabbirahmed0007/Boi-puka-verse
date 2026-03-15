import { MapPin, StickyNote, UsersRound } from 'lucide-react';
import React from 'react'
import { Link } from 'react-router';

function ListedBook({ list }) {
    // console.log(readList)
    const { bookId, bookName, author, image, review, totalPages, rating, category, tags, publisher, yearOfPublishing } = list;
  return (
      <div>
          <div className='box-border p-4 rounded-xl flex items-start gap-5 shadow-2xl '>
              {/* Left  */}
              <div>
                  <img className='w-48 lg:w-56 lg:h-80 object-cover rounded-xl' src={image} alt="" />
              </div>
              {/* Right */}
              <div>
                  <h1 className='text-lg lg:text-xl font-bold mb-2 lg:h-16 overflow-auto'>{bookName}</h1>
                  <div className='border-y py-2 '>By: <span>{author}</span></div>
                  {/* Tags and publishing year */}
                  <div className='my-3  space-y-2'>
                      <div>
                      <span className='font-bold'>Tag: </span>{tags.map(tag => <div className="badge badge-soft badge-success mr-2">#{tag}</div>)}                         
                      </div>
                      <div className='flex items-center gap-1'>
                          <MapPin></MapPin> Year of Publishing: <span>{ yearOfPublishing}</span>
                      </div>
                  </div>
                  {/* Publisher and Pages */}
                  <div className='flex  text-sm lg:text-base flex-col gap-3 border-b pb-1'>
                      <div className='flex items-center gap-1'>
                          <UsersRound></UsersRound>
                          <span>Publisher: { publisher}</span>
                      </div>
                      <div className='flex items-center gap-1'>
                          <StickyNote></StickyNote>
                          <span>Page: { totalPages}</span>
                      </div>

                  </div>

                  {/* Buttons and  rating and category*/}
                  <div className='flex items-center gap-3 py-2 flex-wrap'>
                      <div className="badge badge-soft badge-info rounded-4xl py-4">Category: { category}</div>
                      <div className="badge badge-soft badge-warning rounded-4xl py-4">Rating : { rating}</div>
                      <div>
                          <Link to={`/details/${bookId}`}>
                          <button className='btn bg-[#23BE0A] btn-sm rounded-4xl'>View Details</button>
                          </Link>
                      </div>
                  </div>

              </div>
          </div>

    </div>
  )
}

export default ListedBook