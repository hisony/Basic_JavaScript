
// Parsing a string into a floating-point number (parseFloat returns a number)
var applePrice = parseFloat('22.5'); // This converts '22.5' (string) to 22.5 (number)
console.log("Apple Price:", applePrice);

// parsing a string into an integer
var orangePrice = parseInt('22', 10); //10 indicates number of decimal base
console.log("Orange Price:", orangePrice); 

// Addition of decimal numbers 
var first = 0.1;
var second = 0.2;
var total = first + second; // The sum of 0.1 and 0.2
console.log("Total:", total); // Output: 0.30000000000000004 (due to floating-point precision issue)

// Use toFixed() method to round to a fixed number of decimal places
// The argument inside toFixed() specifies the number of digits after the decimal point
console.log("Rounded Total (no decimal):", total.toFixed(0)); // Output: 0
console.log("Rounded Total (2 decimals):", total.toFixed(2)); // Output: 0.30

// Function to calculate 
function calculateTotalCost(price1, price2) {
    
    return price1 + price2;
}

var result = calculateTotalCost(applePrice, orangePrice); // Passing variables as arguments
console.log("Calculated Total Cost:", result); // Output: 44.5

// Function with default parameters
function multiplyNumbers(a = 1, b = 1) {
    return a * b;
}

console.log("Multiplication with default parameters:", multiplyNumbers(5, 3)); // Output: 15
console.log("Multiplication with default value:", multiplyNumbers(5)); // Output: 5

// Arrow Function Example (A shorter syntax for writing functions)
const add = (num1, num2) => num1 + num2;
console.log("Arrow Function Result (5 + 7):", add(5, 7)); // Output: 12

// Anonymous Function ,used without a name, often passed as arguments, Waits for 2 seconds and prints the message
setTimeout(function() {
    console.log("This is an anonymous function called after 2 seconds!");
}, 2000); 

// Function to demonstrate floating-point precision issues
function addDecimals(a, b) {
    return (a + b).toFixed(15); // Returns the sum rounded to 15 decimal places
}

console.log("Precise Sum of 0.1 + 0.2:", addDecimals(0.1, 0.2)); // Output: 0.30000000000000