import React from 'react'
import { useLoaderData, useParams } from 'react-router'
import { addBooksToDb, addToWishList } from '../../Utility/addToDB';

import Swal from 'sweetalert2'
import withReactContent from 'sweetalert2-react-content'
import { toast } from 'react-toastify';

const MySwal = withReactContent(Swal)

function BookDetails() {


    const {id} = useParams()
    const data = useLoaderData();
    console.log(data)

    const bookDetails = data.find(book => book.bookId === Number(id));




    // const bookDetails = useLoaderData();
    console.log(bookDetails)

    const {bookId, bookName, author, image, review, totalPages, rating, category, tags, publisher, yearOfPublishing } = bookDetails
    


    const handleMarkAsRead = (id) => {
        Swal.fire({
            title: "Good job!",
            text: "You marked as read!",
            icon: "success"
        });

        addBooksToDb(id);
        

        
    }
    const handleAddToWishList = (id) => {

        toast("You added the book in the wishlist");
        addToWishList(id);
        
    }



  return (
      <div>

          <div>
              <div className="card lg:card-side bg-base-100 shadow-sm p-4 box-border">
                  <figure className='lg:w-2/5'>
                      <img
                          className=''
                          src={image}
                          alt={bookName} />
                  </figure>
                  <div className="card-body lg:w-3/5">
                      <h2 className="card-title font-bold text-2xl">{bookName}</h2>
                      <p className='my-3'>By: <span className='font-bold'>{author}</span></p>
                      <div className=' border-y py-5 '>
                          <p className=''> <span className='outline outline-[#23BE0A] p-2 rounded-lg font-semibold'>{ category}</span></p>
                      </div>
                      <div className=' border-b py-5'>
                          <h1 className='text-justify'><span className='font-bold'>Review: </span>{review} </h1>
                          <div className='my-4'>
                              <span className='font-bold'>Tag: </span>{tags.map(tag => <div className="badge badge-soft badge-success mr-2">{tag}</div>)}
                          </div>
                      </div>
                      <div className=" ">
                          <p className='my-2'>Number Of Pages:  <span className='font-bold' > {totalPages}</span></p>
                          <p className='my-2'>Publisher: <span className='font-bold'> {publisher} </span></p>
                          <p className='my-2'>Year of Publishing: <span className='font-bold'>{ yearOfPublishing}</span></p>
                          <p className='my-2'>Rating: <span className='font-bold'>{rating}</span></p>
                          
                          <div className='space-x-3 my-5'>
                              <button onClick={()=>handleMarkAsRead(bookId)} className='btn btn-outline'>Mark as Read</button>
                              <button onClick={()=>handleAddToWishList(bookId)} className='btn btn-info text-white'>Add to WhisList</button>
                          </div>
                          
                      </div>
                  </div>
              </div>
          </div>

    </div>
  )
}

export default BookDetails