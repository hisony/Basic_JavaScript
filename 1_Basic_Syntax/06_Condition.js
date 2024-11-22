var orderType = "chicken";
var orderSize = "large";
var quantity = 3;
var deliveryLocation = "local";
var dayOfWeek = "Saturday";
var price = 0;
var taxRate = 0.15;

if (orderType === "chicken") {
    price = 150;
} else if (orderType === "mutton") {
    price = 200;
} else if (orderType === "vegetarian") {
    price = 100;
} else {
    console.log("Invalid order type.");
}

if (orderSize === "small") {
    price *= 1;
} else if (orderSize === "medium") {
    price *= 1.2;
} else if (orderSize === "large") {
    price *= 1.5;
} else {
    console.log("Invalid order size.");
}

var totalPrice = price * quantity;

if (totalPrice >= 500 && totalPrice < 1000) {
    totalPrice *= 0.9;
    console.log("10% discount applied.");
} else if (totalPrice >= 1000 && totalPrice < 2000) {
    totalPrice *= 0.85;
    console.log("15% discount applied.");
} else if (totalPrice >= 2000) {
    totalPrice *= 0.8;
    console.log("20% discount applied.");
} else {
    console.log("No discount.");
}

if (dayOfWeek === "Saturday" || dayOfWeek === "Sunday") {
    totalPrice *= 0.95;
    console.log("Weekend special discount applied.");
}

var deliveryCharge = 0;
if (deliveryLocation === "local") {
    deliveryCharge = 50;
} else if (deliveryLocation === "international") {
    deliveryCharge = 150;
} else {
    console.log("Invalid delivery location.");
}

totalPrice += deliveryCharge;

var taxAmount = totalPrice * taxRate;
totalPrice += taxAmount;

console.log("Total price including delivery and tax: Tk. " + totalPrice);
