function mathFunction() {
    // Perform an addition operation
    const result = 26 + 32;
    
    // Get the paragraph element using document.getElementById
    const mathElement = document.getElementById("Math");
    
    // Return/display the result to the paragraph element
    mathElement.textContent = "The result of 26 + 32 is: " + result;
}
function subtractionFunction() {
    // Perform a subtraction operation
    const result = 20 - 8;
    
    // Get the paragraph element using document.getElementById
    const subtractionElement = document.getElementById("Subtraction");
    
    // Display the result to the paragraph element
    subtractionElement.textContent = "The result of 20 - 8 is: " + result;
}

function multiplicationFunction() {
    // Perform a multiplication operation
    const result = 6 * 7;
    
    // Get the paragraph element using document.getElementById
    const multiplicationElement = document.getElementById("Multiplication");
    
    // Display the result to the paragraph element
    multiplicationElement.textContent = "The result of 6 * 7 is: " + result;
}

function divisionFunction() {
    // Perform a division operation
    const result = 50 / 5;
    
    // Get the paragraph element using document.getElementById
    const divisionElement = document.getElementById("Division");
    
    // Display the result to the paragraph element
    divisionElement.textContent = "The result of 50 / 5 is: " + result;
}

function multipleOperations() {
    // multiple mathematical operations combined
    const result = (10 + 5) * 3 - 8 / 2;
    
    // Get the paragraph element using document.getElementById
    const multipleElement = document.getElementById("Multiple");
    
    // Display the result to the paragraph element
    multipleElement.textContent = "The result of (10 + 5) * 3 - 8 / 2 is: " + result;
}

function modulusFunction() {
    // Perform a modulus operation (returns)
    const result = 17 % 5;
    
    // Get the paragraph element using document.getElementById
    const modulusElement = document.getElementById("Modulus");
    
    // Display the result to the paragraph element
    modulusElement.textContent = "The result of 17 % 5 is: " + result + " (remainder when 17 is divided by 5)";
}

function negationFunction() {
    // Using the negation operator (unary operator (minus))
    const positiveNumber = 42;
    const negativeNumber = -positiveNumber;  // Negation operator makes it negative
    
    // Get the paragraph element using document.getElementById
    const negationElement = document.getElementById("Negation");
    
    // Display the result to the paragraph element
    negationElement.textContent = "Original number: " + positiveNumber + ", After negation: " + negativeNumber;
}

function incrementFunction() {
    // Using the increment operator (++)
    let number = 10;
    const originalValue = number;
    number++;  // Increment operator adds 1 to the value
    
    // Get the paragraph element using document.getElementById
    const incrementElement = document.getElementById("Increment");
    
    // Display the result to the paragraph element
    incrementElement.textContent = "Original value: " + originalValue + ", After increment (++): " + number;
}

function decrementFunction() {
    // Using the decrement operator (--)
    let number = 10;
    const originalValue = number;
    number--;  // Decrement operator subtracts 1 from the value
    
    // Get the paragraph element using document.getElementById
    const decrementElement = document.getElementById("Decrement");
    
    // Display the result to the paragraph element
    decrementElement.textContent = "Original value: " + originalValue + ", After decrement (--): " + number;
}

function randomFunction() {
    // Using Math.random() to choose a random number
    const randomDecimal = Math.random();  // Generates a random number between 0 and 1
    const randomInteger = Math.floor(Math.random() * 100) + 1;  // Generates a random integer between 1 and 100
    
    // Get the paragraph element using document.getElementById
    const randomElement = document.getElementById("Random");
    
    // Display the result to the paragraph element
    randomElement.textContent = "Random decimal (0-1): " + randomDecimal.toFixed(4) + ", Random integer (1-100): " + randomInteger;
}

function mathMethodsFunction() {
    // Using different Math object methods
    const number = 16.7;
    
    const roundResult = Math.round(number);      // Rounds to nearest integer
    const ceilResult = Math.ceil(number);        // Rounds up
    const floorResult = Math.floor(number);      // Rounds down
    const sqrtResult = Math.sqrt(number);        // Square root
    const powResult = Math.pow(2, 3);            // 2 to the power of 3
    const absResult = Math.abs(-25);             // Absolute value
    const maxResult = Math.max(5, 10, 3, 8);     // Max value
    const minResult = Math.min(5, 10, 3, 8);     // Min value
    
    // Get the paragraph element using document.getElementById
    const mathMethodsElement = document.getElementById("MathMethods");
    
    // Display all results
    mathMethodsElement.textContent = "Math.round(" + number + ") = " + roundResult + 
                                     ", Math.ceil(" + number + ") = " + ceilResult + 
                                     ", Math.floor(" + number + ") = " + floorResult + 
                                     ", Math.sqrt(" + number + ") = " + sqrtResult.toFixed(2) + 
                                     ", Math.pow(2, 3) = " + powResult + 
                                     ", Math.abs(-25) = " + absResult + 
                                     ", Math.max(5,10,3,8) = " + maxResult + 
                                     ", Math.min(5,10,3,8) = " + minResult;
}