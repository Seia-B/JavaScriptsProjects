  //Slideshow 
 let slideIndex = 0;
 
 //Auto slideshow
 function autoSlideshow() {
    let i;
    let slides = document.getElementsByClassName("slide");
    let dots = document.getElementsByClassName("dot");
    
    // Hide all slides
    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }
    
    // Remove active class from all dots
    for (i = 0; i < dots.length; i++) {
        dots[i].className = dots[i].className.replace(" active", "");
    }
    
    // Increment slide index
    slideIndex++;
    
    // Reset to first slide if at the end
    if (slideIndex > slides.length) {
        slideIndex = 1;
    }
    
    // Show current slide and activate corresponding dot
    slides[slideIndex - 1].style.display = "block";
    dots[slideIndex - 1].className += " active";
    
    // Change slide every 4 seconds
    setTimeout(autoSlideshow, 4000);
}

// Function to change slides manually (next/previous)
function changeSlide(n) {
    slideIndex += n - 1;
    showSlides();
}

// Function to show specific slide when dot is clicked
function currentSlide(n) {
    slideIndex = n - 1;
    showSlides();
}

// Manual slide display function
function showSlides() {
    let i;
    let slides = document.getElementsByClassName("slide");
    let dots = document.getElementsByClassName("dot");
    
    slideIndex++;
    
    if (slideIndex > slides.length) {
        slideIndex = 1;
    }
    if (slideIndex < 1) {
        slideIndex = slides.length;
    }
    
    // Hide all slides
    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }
    
    // Remove active class from all dots
    for (i = 0; i < dots.length; i++) {
        dots[i].className = dots[i].className.replace(" active", "");
    }
    
    // Show current slide and activate corresponding dot
    slides[slideIndex - 1].style.display = "block";
    dots[slideIndex - 1].className += " active";
}

// Start the automatic slideshow when page loads
autoSlideshow();

//Countdown to Chritsmas 
function christmasCountdown() {
    //get current date
    const now = new Date();
    const currentYear = now.getFullYear();

    //Set Christmas date
    let christmasDate = new Date(currentYear, 11, 25);

    // Motion to restart the countdown when Christmas is passed.
    if (now > christmasDate) {
        christmasDate = new Date(currentYear + 1, 11, 25);
    }
    // calculates the difference from today to christmas
    const difference = christmasDate - now;
    // calculate days, hours, minutes and seconds
    const days = Math.floor(difference / (1000 * 60 * 60 * 24));
    const hours = Math.floor((difference % (1000 * 60 * 60 * 24)) / (1000 * 60 *60));
    const minutes = Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((difference % (1000 * 60)) / 1000);
    // display the countdown
    document.getElementById("timer").innerHTML =
    days + " days " +
    hours + " hours " +
    minutes + " minutes " +
    seconds + " seconds";

    // if countdown is finished
    if (difference < 0) {
        document.getElementById("timer").innerHTML = "🎄 Merry Christmas! 🎅";
    }
}
    // Update countdown every second
    setInterval(christmasCountdown, 1000);

    // Runs when page load
    christmasCountdown();
