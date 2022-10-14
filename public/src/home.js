function getTotalBooksCount(books) {
  return books.length;
}

function getTotalAccountsCount(accounts) {
  return accounts.length;
}

function getBooksBorrowedCount(books) {
  let checkedOut = books.filter((book) => book.borrows[0].returned == false);
  return checkedOut.length;
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

function getMostCommonGenres(books) {
  let topGenresList = [];
  let listOfGenres = [];
  let tempBook = { name: "", count: 0 };
  let name = "";
  let tempCount = 0;

  // GET LIST OF GENRES IN TOTAL
  for (let i = 0; i < books.length; i++) {
    let genre = books[i].genre;
    for (let j = 0; j < listOfGenres.length; j++) {
      //goes through the topGenres list
      if (listOfGenres[j] == genre) {
        // checks if yes genre matches topGenre
        j = listOfGenres.length;
        genre = ""; // then end the topGenre loop and reset genre
        break; // get out of topGenre if statement
      }
    }
    if (genre) {
      listOfGenres.push(genre);
    }
  }

  // FILTER list of genres based on loop of arrays >> add to new array
  for (let k = 0; k < listOfGenres.length; k++) {
    let tempArrayForCount = books.filter(
      (book) => listOfGenres[k] == book.genre
    );
    tempCount = tempArrayForCount.length;
    //tempBook = { name: listOfGenres[k], count: tempCount };
    topGenresList.push({ name: listOfGenres[k], count: tempCount });
  }

  // HOW TO GET THE TOP 5....
  topGenresList = topGenresList.sort((a, b) => b.count - a.count).slice(0, 5);

  return topGenresList;
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
  for (let i = 0; i < books.length; i++) {
    let title = books[i].title;
    let borrowCount = books[i].borrows.length;
    mostBorrowed.push({ name: title, count: borrowCount });
  }

  // HOW TO GET THE TOP 5....
  mostBorrowed = mostBorrowed.sort((a, b) => b.count - a.count).slice(0, 5);

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

  for (let i = 0; i < authors.length; i++) {
    let totalChecks = 0;
    for (let j = 0; j < books.length; j++) {
      if (authors[i].id == books[j].authorId) {
        let numberBorrowed = books[j].borrows.length;
        totalChecks += numberBorrowed;
      }
    }
    topFiveAuthors.push({
      name: authors[i].name.first + " " + authors[i].name.last,
      count: totalChecks,
    });
  }

  return (topFiveAuthors = topFiveAuthors
    .sort((a, b) => b.count - a.count)
    .slice(0, 5));
}

module.exports = {
  getTotalBooksCount,
  getTotalAccountsCount,
  getBooksBorrowedCount,
  getMostCommonGenres,
  getMostPopularBooks,
  getMostPopularAuthors,
};
