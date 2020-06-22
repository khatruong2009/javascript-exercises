const getTheTitles = function(books) {
 let titles = [];
 for (i = 0; i < books.length; i++) {
  let title = books[i].title;
  titles.push(title);
 }

 return titles;
}

module.exports = getTheTitles;
