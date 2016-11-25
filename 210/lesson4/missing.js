// Write a function that 
// takes a sorted array of integers as an argument, and 
// returns an array that includes all of the missing integers (in order) between the first and last elements of the argument.



// sorted array
// loop from smallest to biggest, not 0 to len -1
// push to new array that not contained in the given one


function missing(arr) {
  var missingElements = [];

  var start = arr[0];
  var end = arr[arr.length - 1];
  for (var i = start; i < end; i++) {
    if (arr.indexOf(i) === -1) {
      missingElements.push(i);
    }
  }
  return missingElements;
}




missing([-3, -2, 1, 5]);                  // [-1, 0, 2, 3, 4]
missing([1, 2, 3, 4]);                    // []
missing([1, 5]);                          // [2, 3, 4]
missing([6]);                             // []

/*
One approach to solving this exercise is to iterate over the integers starting from the lowest up to but no including the highest. At every iteration check if the integer is part of the original array. If the integer isn't part of the original array add it to a new array to be returned.

function missing(array) {
  var result = [];
  var lowest = array[0];
  var highest = array[array.length - 1];

  for (var integer = lowest; integer < highest; integer++) {
    if (array.indexOf(integer) < 0) {
      result.push(integer);
    }
  }

  return result;
}

*/