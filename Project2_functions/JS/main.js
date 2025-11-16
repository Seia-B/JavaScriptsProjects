function displayValue() {
    const firstName = document.getElementById("firstName").value;
    const favoriteGame = document.getElementById("favoriteGame").value;

    // Using += operator to concatenate strings
    let message = "Hi, ";
    message += firstName;
    message += " your favorite game is ";
    message += favoriteGame;
    message += "!";

    // Using document.getElementById to display the concatenated string
    document.getElementById("output").textContent = message;
}

document.addEventListener("DOMContentLoaded", function() {
    document.querySelector("button").addEventListener("click", displayValue);
}); //Display the output on click