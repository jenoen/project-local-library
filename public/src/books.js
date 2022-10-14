function findAuthorById(authors, id) {
  let found = authors.find((author) => author.id == id);
  return found;
}

function findBookById(books, id) {
  let found = books.find((book) => book.id == id);
  return found;
}

function partitionBooksByBorrowedStatus(books) {
  let totalList = [];
  let checkedOut = books.filter((book) => book.borrows[0].returned == false);

  let returnedBooks = books.filter((book) => book.borrows[0].returned == true);

  totalList.push(checkedOut, returnedBooks);
  return totalList;
}

function getBorrowersForBook(book, accounts) {
  let borrowerList = [];
  let personID = "";

  for (let i = 0; i < book.borrows.length; i++) {
    personID = book.borrows[i].id;
    let person = accounts.find((account) => account.id == personID);
    person = { ...person, returned: book.borrows[i].returned };
    borrowerList.push(person);
  }

  let newList = borrowerList.slice(0, 10);
 return newList;
}

module.exports = {
  findAuthorById,
  findBookById,
  partitionBooksByBorrowedStatus,
  getBorrowersForBook,
};
