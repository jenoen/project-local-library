function getTotalBooksCount(books) {
  return books.length;
}

function getTotalAccountsCount(accounts) {
  return accounts.length;
}

function getBooksBorrowedCount(books) {
  /*
  let checkedOut = books.filter((book) => book.borrows[0].returned == false);
  return checkedOut.length;
*/

  //
  let initialValue = 0;
  let checkedOut = books.reduce((acc, cur) => {
    if (acc[cur.borrows[0].returned]) {
      acc[cur.borrows[0].returned]++;
    } else {
      acc[cur.borrows[0].returned] = 1;
    }
    return acc;
  }, {});
  return checkedOut.false;
}

/*
variables:
- new array
- empty object template {name: count;}
- name: genre
- count: # of times appeared

goal: list the common genres and their count appeared

steps:
- loop through books array
- if (newArray.name != genre)  
  - create :::: genre = book[i].genre
  else (i++ break)
- raise count ++
- at end of loop
  - edit object
  - add object ${asdf} to new array
  - reset count = 0:

check for genre and create genre array
then.. go throug genre array and increase count >> add to topGenres


*/

// HELPER FUNCTION
function sortByTopNumber(arrayList, topNumber) {
  return arrayList
    .sort((itemA, itemB) => itemB.count - itemA.count)
    .slice(0, topNumber);
}

function getMostCommonGenres(books) {
  let initialValue = 0;
  let genres = books.reduce((acc, cur) => {
    if (acc[cur.genre]) {
      acc[cur.genre]++;
    } else {
      acc[cur.genre] = 1;
    }
    return acc;
  }, {});

  let finalGenreList = [];
  let placeI = 0;
  for (let genreName in genres) {
    finalGenreList[placeI] = { name: genreName, count: genres[genreName] };
    placeI++;
  }

  // USE OF HELPER FUNCTION!
  finalGenreList = sortByTopNumber(finalGenreList, 5);
  return finalGenreList;
}

/*
variables:
- mostBorrowed array
- borrowCount = .length

goal: list the top checked out books and their count appeared

steps:
- loop through books list
  - note how many times checked out (aka get borrow.length)
- create new object {name: title of book, count: borrowCount}
- add object to new array
- sort at the end

*/
function getMostPopularBooks(books) {
  let mostBorrowed = [];

  // GO THROUGH BOOK ARRAY AND GATHER DATA >> PUSH NEW OBJECT IN NEW ARRAY
  for (let placeI = 0; placeI < books.length; placeI++) {
    let title = books[placeI].title;
    let borrowCount = books[placeI].borrows.length;
    mostBorrowed.push({ name: title, count: borrowCount });
  }

  // HOW TO GET THE TOP 5....
  // USE OF HELPER FUNCTION!
  mostBorrowed = sortByTopNumber(mostBorrowed, 5);
  return mostBorrowed;
}

/*
goal: return author array of {name, count borrowed:}

variables:
- array of topFiveAuthors

steps:
- loop through authors (keep track of ID)
  - inner loop of go through books
    - let total variable = 0;
    - IF author == ID... add books.borrows.length to TOTAL VARIABLE
  - once done with books loop >> add to array {name: author.first, count: total}
- sort/compare topFive


*/

function getMostPopularAuthors(books, authors) {
  let topFiveAuthors = [];

  for (let placeI = 0; placeI < authors.length; placeI++) {
    let totalChecks = 0;
    for (let placeJ = 0; placeJ < books.length; placeJ++) {
      if (authors[placeI].id == books[placeJ].authorId) {
        let numberBorrowed = books[placeJ].borrows.length;
        totalChecks += numberBorrowed;
      }
    }
    topFiveAuthors.push({
      name: authors[placeI].name.first + " " + authors[placeI].name.last,
      count: totalChecks,
    });
  }

  // USE OF HELPER FUNCTION!
  topFiveAuthors = sortByTopNumber(topFiveAuthors, 5);
  return topFiveAuthors;
}

module.exports = {
  getTotalBooksCount,
  getTotalAccountsCount,
  getBooksBorrowedCount,
  getMostCommonGenres,
  getMostPopularBooks,
  getMostPopularAuthors,
};
