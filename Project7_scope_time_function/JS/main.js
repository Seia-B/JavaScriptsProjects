// Global variable 
var globalName = "John Smith";

console.log("Global variable declared:", globalName);

function displayVariables() {
    // Local variable
    var localAge = 25;
    
    console.log("Inside displayVariables function:");
    console.log("Global variable (globalName):", globalName);
    console.log("Local variable (localAge):", localAge);
    
    document.getElementById("output").innerHTML = 
        "Global Name: " + globalName + "<br>Local Age: " + localAge;
}

// Function with intentional error for debugging
function calculateTotal() {
    console.log("=== Starting calculateTotal function ===");
    
    var price = 50;
    var quantity = 3;
    
    console.log("Price:", price);
    console.log("Quantity:", quantity);
    
    // Intentional error:'tax'
    var total = price * quantity + tax;  // 'tax' is not defined!
    
    console.log("Total calculated:", total);
    
    document.getElementById("total").innerHTML = "Total: $" + total;
    
    console.log("=== End of calculateTotal function ===");
}

// Function with if statement using Date().getHours() method
function checkTime() {
    var currentHour = new Date().getHours();
    var greeting;
    
    console.log("Current hour:", currentHour);
    
    if (currentHour < 12) {
        greeting = "Good morning!";
    } else if (currentHour < 18) {
        greeting = "Good afternoon!";
    } else {
        greeting = "Good evening!";
    }
    
    console.log("Greeting:", greeting);
    
    // Using document.getElementById() to reference the id attribute
    document.getElementById("timeGreeting").innerHTML = greeting + " The current time is " + currentHour + ":00";
}

// if statement
function checkAge() {
    var userAge = 20;
    var message;
    
    console.log("Checking age:", userAge);
    
    if (userAge >= 18) {
        message = "You are an adult. Age: " + userAge;
    } else {
        message = "You are a minor. Age: " + userAge;
    }
    
    console.log("Message:", message);
    
    document.getElementById("ageCheck").innerHTML = message;
}

// if and else statement using input value
function checkNumber() {
    // using document.getElementById()
    var number = document.getElementById("numberInput").value;
    var result;
    
    console.log("User entered number:", number);
    
    // If and else statement
    if (number >= 0) {
        result = "The number " + number + " is positive or zero.";
    } else {
        result = "The number " + number + " is negative.";
    }
    
    console.log("Result:", result);
    
    // Display the result using document.getElementById()
    document.getElementById("numberResult").innerHTML = result;
}
