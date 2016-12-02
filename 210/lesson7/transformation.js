function myMap(array, func) {
  var result = [];
  array.forEach(function(element){
    result.push(func(element)); // push the callback's return value to a new array
  });
  return result;
}

var plusOne = function(n) { return n + 1; };

console.log(myMap([1, 2, 3, 4], plusOne));       // [2, 3, 4, 5]


// Let's Build a function that takes an array of book objects as an argument and returns an array of book titles.
// use myMap
function getBooksTitle(books) {
  return myMap(books, getTitle);
}

var books = [
  { title: 'JavaScript and JQuery: Interactive Front-End Web Development',
    author: 'Jon Ducket',
    edition: '1st',
  },
  { title: 'Eloquent JavaScript: A Modern Introduction to Programming',
    author: 'Haverbeke',
    edition: '2nd',
  },
  { title: 'Learning Web Design: A Beginner\'s Guide to HTML, CSS, JavaScript, and Web Graphics',
    author: 'Jennifer Niederst Robbins',
    edition: '4th',
  },
];

var getTitle = function(book) {
  return book['title'];
};

console.log(getBooksTitle(books, getTitle));

// console output

/*
  [ 'JavaScript and JQuery: Interactive Front-End Web Development',
  'Eloquent JavaScript: A Modern Introduction to Programming',
  'Learning Web Design: A Beginner\'s Guide to HTML, CSS, JavaScript, and Web Graphics' ]
*/