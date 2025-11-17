function Ride_Function() {
    var Height, Can_ride;
    Height = document.getElementById("Height").value;
    Can_ride = (Height < 52) ? "You are too short" : "You are tall enough";
    document.getElementById("Ride").innerHTML = Can_ride + " to ride.";
}

// the new keyword
function Vehicle(make, model, year, color) {
    this.make = make;
    this.model = model;
    this.year = year;
    this.color = color;
}

function displayVehicleInfo() {
    var myVehicle = new Vehicle("Toyota", "Camry", 2020, "Blue");
    var displayVehicle = "My vehicle is a " + myVehicle.year + " " + myVehicle.color + " " + myVehicle.make + " " + myVehicle.model;
    document.getElementById("New_and_This").innerHTML = displayVehicle;
}

// Object constructor function
function Person(firstName, lastName, age, occupation) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.age = age;
    this.occupation = occupation;
}
// Assign a variable the value of a reserved word, this is impossible and causes a syntax error.
function displayPerson() {
    var person1 = new Person("Janice", "Chaplin", 34, "Software Developer");
    var personInfo = "Name: " + person1.firstName + " " + person1.lastName + 
                     ", Age: " + person1.age + 
                     ", Occupation: " + person1.occupation;
    document.getElementById("PersonInfo").innerHTML = personInfo;
}

// Nested function
function myNestedFunction() {
    var outerVariable = "Hello from Alberta! ";
    
    // Inner (nested) function
    function innerFunction() {
        var innerVariable = "Hello from the city of Edmonton!";
        return outerVariable + innerVariable;
    }
    
    // Call the nested function and display result using document.getElementById()
    document.getElementById("Nested_function").innerHTML = innerFunction();
}