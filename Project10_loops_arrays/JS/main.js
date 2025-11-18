//call loop
function Call_Loop() {
    let result = "";
    let i = 0;
    
    while (i < 10) {
        result += i + "<br>";
        i++;
    }
    
    document.getElementById("Loop").innerHTML = result;


  // String length property challenge
    let text = "Click here to execute the loop.";
    let length = text.length;
    alert("The string length is: " + length);
}
//for loop
function for_Loop() {
    let instruments = ["Guitar", "Piano", "Drums", "Violin", "Saxophone"];
    let result = "";
    
    for (let i = 0; i < instruments.length; i++) {
        result += instruments[i] + "<br>";
    }
    
    document.getElementById("List_of_Instruments").innerHTML = result;
}
//array
function array_Function() {
    let colors = ["Red", "Blue", "Green", "Yellow", "Purple"];
    document.getElementById("Array").innerHTML = colors.join("<br>");
}

// return statement
function getCarDetails(car) {
    return "Brand: " + car.brand + ", Model: " + car.model + ", Year: " + car.year;
}

function constant_function() {
    // Create an object using const keyword with properties and values
    const car = {
        brand: "Toyota",
        model: "Camry",
        year: 2023,
        color: "Blue"
    };
    
     // Using let keyword
    let originalColor = car.color;

    // Change a property's value
    car.color = "Red";
    
    // Add a property with a value
    car.mileage = 15000;

     // Use return statement 
    let carInfo = getCarDetails(car);
    
       // Display string with added and changed property values
    document.getElementById("Constant").innerHTML = 
        carInfo + "<br>" +
        "Original Color (let): " + originalColor + "<br>" +
        "Color (changed): " + car.color + "<br>" +
        "Mileage (added): " + car.mileage;
}


function let_object_function() {
    // Create an object using let keyword with properties and a method
    let person = {
        firstName: "Janice",
        lastName: "Wilson",
        age: 30,
        city: "Toronto",
        // Method within the object
        getFullInfo: function() {
            return this.firstName + " " + this.lastName + " is " + this.age + " years old and lives in " + this.city + ".";
        }
    };
    
    // Display the object's method result
    document.getElementById("LetObject").innerHTML = person.getFullInfo();
}

function break_loop() {
    // Loop with break statement
    let result = "Numbers: ";
    
    for (let i = 1; i <= 20; i++) {
        if (i === 11) {
            result += "<br>Break statement executed at " + i;
            break; // Exits the loop when i equals 11
        }
        result += i + " ";
    }
    
    document.getElementById("BreakLoop").innerHTML = result;
}

function continue_loop() {
    // Loop with continue statement
    let result = "Numbers (skipping multiples of 3): ";
    
    for (let i = 1; i <= 15; i++) {
        if (i % 3 === 0) {
            continue; 
        }
        result += i + " ";
    }
    
    result += "<br>Continue statement skipped multiples of 3";
    
    document.getElementById("ContinueLoop").innerHTML = result;
}