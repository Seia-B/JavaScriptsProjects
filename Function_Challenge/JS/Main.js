// JavaScript function that executes document.getElementById
function executeFunction() {
    // Get the input value using document.getElementById
    const inputElement = document.getElementById("userInput");
    const userText = inputElement.value;
    
    // Get the output element using document.getElementById
    const outputElement = document.getElementById("displayText");
    
    // Display the result
    outputElement.textContent = "Your Nickname is " + userText;
}