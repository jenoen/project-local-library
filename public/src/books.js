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
  let borrowerList = book.borrows.map((borrowed) => borrowed.id); // rewrites/maps a new array to show only book.borrows array of ids
  for (let placeI = 0; placeI < borrowerList.length; placeI++) {
    // as go through borrowerList.. check against accounts array >> keep person object
    let person = accounts.find((account) => account.id == borrowerList[placeI]);
    borrowerList[placeI] = {
      // replace borrowerList item with person object/updated
      ...person,
      returned: book.borrows[placeI].returned,
    };
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
