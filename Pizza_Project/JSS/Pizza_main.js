function getReceipt() {
    var text1 = "";
    var itemList = [];
    var priceList = [];
    var runningTotal = 0;
    var sizeTotal = 0;
    
    // Get selected size
    var sizeArray = document.getElementsByClassName("size");
    var selectedSize = "";
    
    for (var i = 0; i < sizeArray.length; i++) {
        if (sizeArray[i].checked) {
            selectedSize = sizeArray[i].value;
            itemList.push(selectedSize);
            break;
        }
    }
    
    // Calculate size price
    if (selectedSize === "Personal Pizza") {
        sizeTotal = 6;
    } else if (selectedSize === "Medium Pizza") {
        sizeTotal = 10;
    } else if (selectedSize === "Large Pizza") {
        sizeTotal = 14;
    } else if (selectedSize === "Extra Large Pizza") {
        sizeTotal = 16;
    } else if (selectedSize === "Family Pizza") {
        sizeTotal = 20;
    }
    
    priceList.push(sizeTotal);
    runningTotal = sizeTotal;
    
    // Get selected toppings
    var toppingTotal = 0;
    var selectedTopping = [];
    var toppingArray = document.getElementsByClassName("toppings");
    
    for (var j = 0; j < toppingArray.length; j++) {
        if (toppingArray[j].checked) {
            selectedTopping.push(toppingArray[j].value);
            itemList.push(toppingArray[j].value);
            
            // Donair costs extra
            if (toppingArray[j].value === "Donair") {
                toppingTotal = toppingTotal + 2;
                priceList.push(2);
            } else {
                priceList.push(0);
            }
        }
    }
    
    // Calculate topping cost (first one free)
    var toppingCount = selectedTopping.length;
    if (toppingCount > 1) {
        toppingTotal = toppingTotal + (toppingCount - 1);
    }
    
    runningTotal = runningTotal + toppingTotal;
    
    // Display receipt
    var itemHTML = "";
    var priceHTML = "";
    
    for (var k = 0; k < itemList.length; k++) {
        itemHTML += itemList[k] + "<br>";
        if (k === 0) {
            priceHTML += "$" + priceList[k] + "<br>";
        } else {
            if (itemList[k] === "Donair") {
                priceHTML += "$2<br>";
            } else if (k === 1) {
                priceHTML += "$0<br>";
            } else {
                priceHTML += "$1<br>";
            }
        }
    }
    
    document.getElementById("showText").innerHTML = itemHTML;
    document.getElementById("totalPrice").innerHTML = priceHTML;
    document.getElementById("finalTotal").innerHTML = "Total Price: $" + runningTotal.toFixed(2);
    
    console.log("Purchase Total: $" + runningTotal.toFixed(2));
}

function resetForm() {
    document.getElementById("frmMenu").reset();
    document.getElementById("showText").innerHTML = "";
    document.getElementById("totalPrice").innerHTML = "";
    document.getElementById("finalTotal").innerHTML = "";
}