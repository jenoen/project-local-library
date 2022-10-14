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

  for (let i = 0; i < books.length; i++) {
    let chosenBook = books[i];
    for (let j = 0; j < chosenBook.borrows.length; j++) {
      let borrowedBy = chosenBook.borrows[j];
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

  for (let i = 0; i < checkedOut.length; i++) {
    let theAuthorId = checkedOut[i].authorId;
    for (let j = 0; j < authors.length; j++) {
      if (theAuthorId == authors[j].id) {
        checkedOut[i] = { ...checkedOut[i], author: authors[j] };
        j = authors.length;
      }
    }
  }

  return checkedOut;
}

module.exports = {
  findAccountById,
  sortAccountsByLastName,
  getTotalNumberOfBorrows,
  getBooksPossessedByAccount,
};
