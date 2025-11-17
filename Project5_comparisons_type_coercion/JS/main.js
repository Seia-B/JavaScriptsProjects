// Create variables of different data types
var myString = "Hello";
var myNumber = 42;
var myBoolean = true;
var myObject = {name: "Alice", age: 30};
var myArray = [1, 2, 3, 4, 5];
var myUndefined;
var myNull = null;

// Using document.write() method and typeof operator to display data types
document.write("Variable: myString = " + myString + " | Data Type: " + typeof myString + "<br>");
document.write("Variable: myNumber = " + myNumber + " | Data Type: " + typeof myNumber + "<br>");
document.write("Variable: myBoolean = " + myBoolean + " | Data Type: " + typeof myBoolean + "<br>");
document.write("Variable: myObject = " + JSON.stringify(myObject) + " | Data Type: " + typeof myObject + "<br>");
document.write("Variable: myArray = " + myArray + " | Data Type: " + typeof myArray + "<br>");
document.write("Variable: myUndefined = " + myUndefined + " | Data Type: " + typeof myUndefined + "<br>");
document.write("Variable: myNull = " + myNull + " | Data Type: " + typeof myNull + "<br>");

//type coercion example
document.write("<br><h2>Type Coercion </h2>");

var stringMinus = "20" - 5;
document.write("'20' - 5 = " + stringMinus + " | Data Type: " + typeof stringMinus + " (String coerced to Number)<br>");

//Using isNaN() function to display "true"
var invalidNumber = "abc";
document.write("isNaN('abc') = " + isNaN(invalidNumber) + "<br>");

//Using isNaN() function to display "false"
var validNumber = 100;
document.write("isNaN(100) = " + isNaN(validNumber) + "<br>");


// display Infinity using document.getElementById()
function displayInfinity() {
    // Using a large enough number to produce Infinity
    var largeNumber = 1e308 * 10; 
    
    // Using document.getElementById() to display Infinity
    document.getElementById("infinityPositive").innerHTML = "Large number: 1e308 * 10 = " + largeNumber + "";
}

// display -Infinity using document.getElementById()
function displayNegativeInfinity() {
    // Using a large negative number to produce -Infinity
    var largeNegativeNumber = -1e308 * 10; 
    
    // Using document.getElementById() to display -Infinity
    document.getElementById("infinityNegative").innerHTML = "Large negative number: -1e308 * 10 = " + largeNegativeNumber + "";
}
// display boolean logic
function displayBooleanLogic() {

    var result ="";
    // Greater than operator = displays true
    var greaterThanTrue = 10 > 5;
    result += "10 > 5 = " + greaterThanTrue + "<br>";

    // Greater than operator = displays false
    var greaterThanFalse = 3 > 8;
    result += "3 > 8 = " + greaterThanFalse + "<br>";

     // Less than operator = displays true
    var lessThanTrue = 5 < 10;
    result += "5 < 10 = " + lessThanTrue + "<br>";

     // Less than operator - displays false
    var lessThanFalse = 15 < 7;
    result += "15 < 7 = " + lessThanFalse + "<br>";

    // Using document.getElementById() to display all Boolean logic results
    document.getElementById("booleanLogic").innerHTML = "<br>" + result;
}

// perform math operations with console.log()
function performConsoleMath() {
    console.log("=== Math Operations with console.log() ===");
    
    // Addition
    console.log("Addition: 15 + 25 =", 15 + 25);
    
    // Subtraction
    console.log("Subtraction: 50 - 18 =", 50 - 18);
    
    // Multiplication
    console.log("Multiplication: 7 * 8 =", 7 * 8);
    
    // Division
    console.log("Division: 100 / 4 =", 100 / 4);

     // Informs user
    document.getElementById("consoleLog").innerHTML = "Math operations performed! Check the browser console (F12 or Right-click > Inspect > Console) to see the results.";
}
// display console.log 
function displayFalseInConsole() {
    
    //Greater than = false
    console.log("5 > 10 =", 5 > 10);

     // Update the paragraph to inform user
    document.getElementById("consoleBooleanFalse").innerHTML = "Boolean 'false' examples displayed in console! Check the browser console (F12) to see all the results.";
}


// display == operator examples returning true and false
function displayEqualityExamples() {
    var result = "";
    
    // Same numbers
    result += "10 == 10: " + (10 == 10) + " (same numbers)<br>";
    
    // Same strings
    result += "'hello' == 'hello': " + ('hello' == 'hello') + " (same strings)<br>";
    
    // Different numbers
    result += "5 == 10: " + (5 == 10) + " (different numbers)<br>";
    
    // Different strings
    result += "'apple' == 'orange': " + ('apple' == 'orange') + " (different strings)<br>";
    
    // Using document.getElementById() to display results
    document.getElementById("equalityOperator").innerHTML = result;
}

// display === operator examples returning true and false
function displayStrictEqualityExamples() {
    var result = "";
    
    // Same data type and same value
    result += "100 === 100: " + (100 === 100) + "<br>";
    result += "'hello' === 'hello': " + ('hello' === 'hello') + "<br>";
    result += "true === true: " + (true === true) + "<br>";
    result += "false === false: " + (false === false) + "<br>";
    
    var x = 50;
    var y = 50;
    result += "x === y (where x=50, y=50): " + (x === y) + "<br>";
    
    // Different data type and different value
    result += "'100' === 200: " + ('100' === 200) + "<br>";
    result += "true === 'hello': " + (true === 'hello') + "<br>";
    result += "50 === 'world': " + (50 === 'world') + "<br>";
    result += "false === 10: " + (false === 10) + "<br>";
    
    // Different data type but same value
    result += "'50' === 50: " + ('50' === 50) + "<br>";
    result += "'100' === 100: " + ('100' === 100) + "<br>";
    result += "true === 1: " + (true === 1) + "<br>";
    result += "false === 0: " + (false === 0) + "<br>";
    result += "'' === 0: " + ('' === 0) + "<br>";
    
    // Same data type but different value
    result += "100 === 200: " + (100 === 200) + "<br>";
    result += "'apple' === 'orange': " + ('apple' === 'orange') + "<br>";
    result += "true === false: " + (true === false) + "<br>";
    result += "50 === 75: " + (50 === 75) + "<br>";
    result += "'hello' === 'world': " + ('hello' === 'world') + "<br>";
    
    // Using document.getElementById() to display results
    document.getElementById("strictEqualityOperator").innerHTML = result;
}

// display AND  and OR operator
function displayAndOrOperators() {
    var result = "";
    
    // AND Operator 
    // AND returns true = both conditions are true
    result += "(10 > 5) && (20 > 15): " + ((10 > 5) && (20 > 15)) + "<br>";

    // AND returns false = one of the two condition is false
    result += "(10 > 5) && (20 < 15): " + ((10 > 5) && (20 < 15)) + "<br>";
    
    // OR Operator 
    // OR returns true =  one of the two condition is true
    result += "(10 > 5) || (20 < 15): " + ((10 > 5) || (20 < 15)) + "<br>";

    // OR returns false = both conditions are false
    result += "(10 < 5) || (20 < 15): " + ((10 < 5) || (20 < 15)) + "<br>";
 
    
    // Using document.getElementById() to display results
    document.getElementById("andOrOperators").innerHTML = result;
}

// display NOT operator 
function displayNotOperator() {
    var result = "";
    
    // NOT returns true = reversed false
    result += "!(10 < 5): " + (!(10 < 5)) + "<br>";

    // NOT returns false = reversed true
    result += "!(10 > 5): " + (!(10 > 5)) + "<br>";
    
    // Using document.getElementById() to display results
    document.getElementById("notOperator").innerHTML = result;
}