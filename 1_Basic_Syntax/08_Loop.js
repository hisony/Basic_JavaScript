var fruits = ["apple", "banana", "cherry", "orange", "grape"];

// For Loop
for (var i = 0; i < fruits.length; i++) {
    console.log(fruits[i]);
}

// While Loop
var j = 0;
while (j < fruits.length) {
    console.log(fruits[j]);
    j++;
}

// Do-While Loop
var k = 0;
do {
    console.log(fruits[k]);
    k++;
} while (k < fruits.length);

// For...of Loop
for (var fruit of fruits) {
    console.log(fruit);
}

// For...in Loop
for (var index in fruits) {
    console.log(fruits[index]);
}
