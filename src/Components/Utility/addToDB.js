import { toast } from "react-toastify";


// For mark as read

const getStoredBooks = () => {
    const storedBooks = localStorage.getItem('readList');

    if (storedBooks) {
        const storedBooksStr = JSON.parse(storedBooks);
        return storedBooksStr;
    }
    else {
        return [];
    }
}



const setBooksToDb = (book) => {
    
    const booksToStringify = JSON.stringify(book);
    localStorage.setItem('readList',booksToStringify);
}



const addBooksToDb = (id) => {
    const getBooksFromDb = getStoredBooks();

    if (getBooksFromDb.includes(id)) {
        
      return  toast("Book is Already in the list")
    } else {
        
        //  getBooksFromDb.push(id);
        const getNewDb =[...getBooksFromDb, id]

        setBooksToDb(getNewDb);

        
    }
}



// Add to WishList

const getWishList = () => {
    
    const wishListedBooks = localStorage.getItem('wishList');
    if (wishListedBooks) {
        const wishListParsedBooks = JSON.parse(wishListedBooks);
        return wishListParsedBooks;
    } else {
        return [];
    }
}

const setBooksToWishList = (book) => {
    
    const setBooksStr = JSON.stringify(book);

    localStorage.setItem('wishList', setBooksStr)
}

const addToWishList = (id) => {
    const getWishListedBooks = getWishList();

    if (getWishListedBooks.includes(id)) {
        return toast("You already added to the wishlist!");
    } else {
        const newWishList = [...getWishListedBooks, id];
        setBooksToWishList(newWishList);
    }
}





export {addBooksToDb, getStoredBooks , getWishList, addToWishList}