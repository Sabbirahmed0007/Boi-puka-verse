
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
        alert('Book is Already in the list');
    } else {
        
        //  getBooksFromDb.push(id);
        const getNewDb =[...getBooksFromDb, id]

        setBooksToDb(getNewDb);

        
    }
}






export {addBooksToDb, getStoredBooks}