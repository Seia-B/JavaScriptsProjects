function Console_Function() {
    var Console_Output;
    var Consoles = document.getElementById("Console_Input").value;
    var Console_String = " is an awesome gaming system!";
    
    switch(Consoles) {
        case "PlayStation":
            Console_Output = "PlayStation" + Console_String;
            break;
        case "Xbox":
            Console_Output = "Xbox" + Console_String;
            break;
        case "Nintendo":
            Console_Output = "Nintendo" + Console_String;
            break;
        case "Steam Deck":
            Console_Output = "Steam Deck" + Console_String;
            break;
        case "Switch":
            Console_Output = "Switch" + Console_String;
            break;
        default:
            Console_Output = "Please enter a console exactly as written on the above list.";
    }
    
    document.getElementById("Output").innerHTML = Console_Output;
}

function Highlight_Consoles() {
    var consoleElements = document.getElementsByClassName("console-item");
    
    for (var i = 0; i < consoleElements.length; i++) {
        consoleElements[i].style.backgroundColor = "#ffeb3b";
        consoleElements[i].style.fontWeight = "bold";
    }
}

function Draw_PlayStation() {
    var canvas = document.getElementById("myCanvas");
    var ctx = canvas.getContext("2d");
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    
    var gradient = ctx.createLinearGradient(0, 0, 400, 150);
    gradient.addColorStop(0, "#003087");
    gradient.addColorStop(1, "#0066cc");
    ctx.fillStyle = gradient;
    ctx.fillRect(0, 0, 400, 150);
    
    ctx.fillStyle = "white";
    ctx.fillRect(50, 50, 40, 40);
    
    ctx.beginPath();
    ctx.arc(120, 70, 20, 0, 2 * Math.PI);
    ctx.fill();
    
    ctx.beginPath();
    ctx.moveTo(180, 50);
    ctx.lineTo(200, 90);
    ctx.lineTo(160, 90);
    ctx.closePath();
    ctx.fill();
    
    ctx.beginPath();
    ctx.moveTo(240, 60);
    ctx.lineTo(260, 80);
    ctx.moveTo(260, 60);
    ctx.lineTo(240, 80);
    ctx.strokeStyle = "white";
    ctx.lineWidth = 5;
    ctx.stroke();
    
    ctx.fillStyle = "white";
    ctx.font = "bold 40px Arial";
    ctx.fillText("PlayStation", 80, 130);
}


function Draw_Xbox() {
    var canvas = document.getElementById("myCanvas");
    var ctx = canvas.getContext("2d");
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    
    var gradient = ctx.createLinearGradient(0, 0, 400, 150);
    gradient.addColorStop(0, "#107c10");
    gradient.addColorStop(1, "#1db51d");
    ctx.fillStyle = gradient;
    ctx.fillRect(0, 0, 400, 150);
    
    ctx.fillStyle = "white";
    ctx.beginPath();
    ctx.arc(200, 60, 35, 0, 2 * Math.PI);
    ctx.fill();
    
    ctx.strokeStyle = "#107c10";
    ctx.lineWidth = 6;
    ctx.beginPath();
    ctx.moveTo(180, 40);
    ctx.lineTo(220, 80);
    ctx.moveTo(220, 40);
    ctx.lineTo(180, 80);
    ctx.stroke();
    
    ctx.fillStyle = "white";
    ctx.font = "bold 50px Arial";
    ctx.fillText("XBOX", 130, 135);
}

function Draw_Nintendo() {
    var canvas = document.getElementById("myCanvas");
    var ctx = canvas.getContext("2d");
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    
    var gradient = ctx.createLinearGradient(0, 0, 400, 150);
    gradient.addColorStop(0, "#e60012");
    gradient.addColorStop(1, "#ff3366");
    ctx.fillStyle = gradient;
    ctx.fillRect(0, 0, 400, 150);
    
    ctx.fillStyle = "white";
    ctx.fillRect(100, 40, 200, 50);
    ctx.beginPath();
    ctx.arc(100, 65, 25, Math.PI/2, 3*Math.PI/2);
    ctx.arc(300, 65, 25, 3*Math.PI/2, Math.PI/2);
    ctx.fill();
    
    ctx.fillStyle = "#e60012";
    ctx.fillRect(130, 55, 20, 5);
    ctx.fillRect(137, 48, 5, 20);
    
    ctx.beginPath();
    ctx.arc(250, 60, 6, 0, 2*Math.PI);
    ctx.fill();
    ctx.beginPath();
    ctx.arc(270, 60, 6, 0, 2*Math.PI);
    ctx.fill();
    
    ctx.fillStyle = "white";
    ctx.font = "bold 40px Arial";
    ctx.fillText("Nintendo", 120, 130);
}