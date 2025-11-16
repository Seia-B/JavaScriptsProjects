// Creating a JavaScript object (dictionary)
const myDictionary = {
    name: "Janet William",
    age: 25,
    city: "New York",
    occupation: "Runway Model",
    hobby: "Cooking"
};

// Function to display dictionary values
function displayDictionary() {
    // Using document.getElementById().innerHTML to output a value
    document.getElementById("dictionary").innerHTML = "Name: " + myDictionary.name + 
                                                       ", Age: " + myDictionary.age + 
                                                       ", City: " + myDictionary.city + 
                                                       ", Occupation: " + myDictionary.occupation + 
                                                       ", Hobby: " + myDictionary.hobby;
}

// Function to delete a value from the dictionary
function deleteDictionaryValue() {
    // Using the delete operator to remove a value
    delete myDictionary.hobby;
    
    // Using document.getElementById().innerHTML to specify the deleted value
    document.getElementById("deleteDictionary").innerHTML = "The 'hobby' property has been deleted! Now the dictionary contains: Name: " + myDictionary.name + 
                                                             ", Age: " + myDictionary.age + 
                                                             ", City: " + myDictionary.city + 
                                                             ", Occupation: " + myDictionary.occupation + 
                                                             ", Hobby: " + myDictionary.hobby;
}

// Function that deletes a key BEFORE displaying its value
function deleteBeforeDisplay() {
    // Delete the key BEFORE trying to display it
    delete myDictionary.city;
    
    // Now try to display the deleted value using document.getElementById().innerHTML
    document.getElementById("deleteBeforeDisplay").innerHTML = "The 'city' property was deleted before display. Value of city: " + myDictionary.city + " (undefined because it was deleted)";
}