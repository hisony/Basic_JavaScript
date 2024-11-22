var fruits = ["apple", "banana", "cherry"];

fruits.push("orange"); // Adds "orange" to the end
console.log(fruits);

fruits.pop(); // Removes the last element ("orange")
console.log(fruits);

fruits.shift(); // Removes the first element ("apple")
console.log(fruits);

fruits.unshift("grape"); // Adds "grape" to the beginning
console.log(fruits);

var index = fruits.indexOf("banana"); // Finds the position of "banana"
console.log(index);

var isArrayCheck = Array.isArray(fruits); // Checks if fruits is an array
console.log(isArrayCheck);

var fruitString = fruits.join(", "); // Joins the elements into a string
console.log(fruitString);

var vegetables = ["carrot", "potato", "tomato"];
var combinedArray = fruits.concat(vegetables); // Merges fruits and vegetables arrays
console.log(combinedArray);

var slicedFruits = fruits.slice(1, 3); // Creates a new array from index 1 to 3 (not including 3)
console.log(slicedFruits);
console.log(fruits); // Original array remains unchanged

fruits.splice(2, 1, "kiwi", "grape"); // Replaces 1 element at index 2 with "kiwi" and "grape"
console.log(fruits);
