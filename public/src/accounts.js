function findAccountById(accounts, id) {
  let accountObject = accounts.find((account) => account.id === id);
  return accountObject;
}

function sortAccountsByLastName(accounts) {
  let accountSorted = accounts.sort((account1, account2) =>
    account1.name.last.toLowerCase() < account2.name.last.toLowerCase() ? -1 : 1
  );
  return accountSorted;
}

function getTotalNumberOfBorrows(account, books) {
  let count = 0;

  for (let placeI = 0; placeI < books.length; placeI++) {
    let chosenBook = books[placeI];
    for (let placeJ = 0; placeJ < chosenBook.borrows.length; placeJ++) {
      let borrowedBy = chosenBook.borrows[placeJ];
      if (borrowedBy.id == account.id) {
        count++;
      }
    }
  }
  return count;
}

/*
goal: return array of book info currently checkout/false + add author info in the book object

variables:
- new book checked out array

steps:
- loop through each book
  - new array = filter out if first book is checked out by accountID 
- loop through new array >> edit/add full author object


*/

function getBooksPossessedByAccount(account, books, authors) {
  let accountId = account.id;

  let checkedOut = books.filter((book) => book.borrows[0].id == accountId);

  for (let placeI = 0; placeI < checkedOut.length; placeI++) {
    let theAuthorId = checkedOut[placeI].authorId;
    for (let placeJ = 0; placeJ < authors.length; placeJ++) {
      if (theAuthorId == authors[placeJ].id) {
        checkedOut[placeI] = { ...checkedOut[placeI], author: authors[placeJ] };
        placeJ = authors.length;
      }
    }
  }

  return checkedOut;

  ///




}

module.exports = {
  findAccountById,
  sortAccountsByLastName,
  getTotalNumberOfBorrows,
  getBooksPossessedByAccount,
};
