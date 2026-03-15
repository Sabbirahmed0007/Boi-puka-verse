import React, { useEffect, useState } from 'react'
import { useLoaderData } from 'react-router';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
import { getStoredBooks, getWishList } from '../../Utility/addToDB';
import ListedBook from './ListedBook';

function ListedBooks() {
  const [readLists, setReadLists] = useState([]);
  const [wishLists, setWishList] = useState([]);
  const [sort , setSort]=useState("")
  const books = useLoaderData();
  console.log(books)


  useEffect(() => {

    // Read books =======================
    const storedBookData = getStoredBooks();
    const convertedStoredBooks = storedBookData.map(bookId => parseInt(bookId))
    // console.log(convertedStoredBooks)

    // using inclueds method
    const myReadList = books.filter(book => convertedStoredBooks.includes(book.bookId))
    // console.log(myReadList)
    setReadLists(myReadList);



    //WishList books

    const storedWishListData = getWishList();
    console.log(storedWishListData)
    const singlewishListData = storedWishListData.map(id => parseInt(id));

    const wishList = books.filter(book => singlewishListData.includes(book.bookId));
    setWishList(wishList);


  }, [books])


  const handleSort = (type) => {

    setSort(type)

    if (type === "pages") {

      const sortedByPage = [...readLists].sort((a, b) => b.totalPages - a.totalPages)
      setReadLists(sortedByPage)
      return;
      
    }
    if (type === "ratings") {
      const sortedByRating = [...readLists].sort((a, b) => b.rating - a.rating)
      setReadLists(sortedByRating)
      return;
      
    }

    
    
  }


  return (
    <div>
      <div className='text-center'>
        
        <details className="dropdown  ">
          <summary className="btn bg-[#23BE0A] m-1"><div className=' font-semibold'>Sort By { sort?sort:''}</div></summary>
          <ul className="menu dropdown-content bg-base-100 rounded-box z-1 w-52 p-2 shadow-sm">
            <li><a onClick={()=>handleSort('pages')}>Pages</a></li>
            <li><a onClick={() => handleSort('ratings')}> Ratings</a></li>
          </ul>
        </details>
      </div>
      {/* Tabs here */}
      <div>
        <Tabs>
          <TabList>
            <Tab>Read Books</Tab>
            <Tab>WishList books</Tab>
          </TabList>


          {/* Books i read */}
          <TabPanel>
            <h2 className='text-xl font-bold'>Books:  {readLists.length}</h2>
            <div className=' grid grid-cols-1 lg:grid-cols-2 items-center justify-center gap-5'>
              {
                readLists.map(readList => <ListedBook key={readList.bookId} list={readList}></ListedBook>)
              }
            </div>
          </TabPanel>
          {/* Books are in my wishList */}
          <TabPanel>
            <h2>My wishlist: { wishLists.length}</h2>
            <div className=' grid grid-cols-1 lg:grid-cols-2 items-center justify-center gap-5'>
              {
                wishLists.map(wishList => <ListedBook key={wishList.bookId} list={wishList}></ListedBook>)
              }
            </div>
          </TabPanel>
        </Tabs>
      </div>
      {/* TabsEnd */}
    </div>
  )
}

export default ListedBooks