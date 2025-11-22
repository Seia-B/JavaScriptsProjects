function displayCharacter(element) {
    var house = element.getAttribute("data-character-house");
    var role = element.getAttribute("data-character-role");
    var patronus = element.getAttribute("data-character-patronus");
    var details = element.getAttribute("data-character-details");
    var name = element.querySelector(".character-name").innerText;
    
    alert(name + "\n\n" +
          "House: " + house + "\n" +
          "Role: " + role + "\n" +
          "Patronus: " + patronus + "\n\n" +
          details);
}