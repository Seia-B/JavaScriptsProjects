// Using concat() method to connect strings
let greeting = "Hello";
let name = " Merry Christmas";
let punctuation = "!";

// Concatenate the strings using concat()
let message = greeting.concat(name, punctuation);

// Display the result in the paragraph element
document.getElementById("output").textContent = message;

// Using slice() method to display a section of a string
let fullString = "JavaScript is awesome!";
let slicedString = fullString.slice(0, 10); // Extracts "JavaScript"

// Using toUpperCase() method to show uppercase
let upperCaseString = fullString.toUpperCase(); // Converts to "JAVASCRIPT IS AWESOME!"

// Using search() method to find the position of a word
let searchPosition = fullString.search("awesome"); // Returns 14 (the index where "awesome" starts)

// Add click event listener to the button
document.getElementById("sliceBtn").addEventListener("click", function() {
    document.getElementById("sliceOutput").textContent = 
        "Full string: " + fullString + 
        " | Sliced string: " + slicedString +
        " | Uppercase: " + upperCaseString +
        " | Position of 'awesome': " + searchPosition;
});

// toString() method 
let num = 42;
let numString = num.toString();

// Using toPrecision() method 
let preciseNum = 123.456789;
let preciseString = preciseNum.toPrecision(5); // Returns "123.46" (5) 

// Using toFixed() method to format a number to a specified number of decimal places
let decimalNum = 9.876543;
let fixedString = decimalNum.toFixed(2); // Returns "9.88" as a string with 2 decimal places

// Using valueOf() method 
let numObject = new Number(100);
let primitiveValue = numObject.valueOf(); // Returns 100 

// all method results
document.getElementById('result').textContent = 
    "toString() result: " + numString + 
    " | toPrecision() result: " + preciseString +
    " | toFixed() result: " + fixedString +
    " | valueOf() result: " + primitiveValue;
