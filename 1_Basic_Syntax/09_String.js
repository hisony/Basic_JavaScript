var str = "hello, myself Sony";

// String to Array using split 
console.log(str.split(""));  // ['h', 'e', 'l', 'l', 'o', ',', ' ', 'm', 'y', 's', 'e', 'l', 'f', ' ', 'S', 'o', 'n', 'y']

// Join:Array to String using join
console.log(str.split("").join(""));  // "hello, myself Sony"

// Lowercase and Uppercase
console.log(str.toLowerCase()); // "hello, myself sony"

console.log(str.toUpperCase());  //  "HELLO, MYSELF SONY"

// Trim
var strWithSpaces = "   hello, myself Sony   ";
console.log(strWithSpaces.trim());  // "hello, myself Sony"

// Slice
console.log(str.slice(7, 13)); //  "myself"

// Join:array to string add comma among every elements
var fruits = ["apple", "banana", "cherry"];
console.log(fruits.join(", ")); //  "apple, banana, cherry"

// Concat
var greeting = "Hello, ";
var name = "myself Sony";
console.log(greeting.concat(name));  // "Hello, myself Sony"

// Includes
console.log(str.includes("myself"));  // true

console.log(str.includes("John")); // false

// Split: string to array basis on space
console.log(str.split(" "));  
//  ['hello,', 'myself', 'Sony']

// Reverse a String

// Method 1: Split, Reverse, Join
console.log(str.split("").reverse().join("")); //  "ynoS flesym ,olleh"

// Method 2: Loop (letter + reverse)
var reversed2 = "";
for (var i = str.length - 1; i >= 0; i--) {
    reversed2 += str[i];
}
console.log(reversed2); //  "ynoS flesym ,olleh"

// Method 3: Recursion
function reverseRecursively(s) {
    if (s === "") return s;
    else return reverseRecursively(s.substr(1)) + s[0];
}
console.log(reverseRecursively(str));  // Reverses the string using recursion
//  "ynoS flesym ,olleh"
