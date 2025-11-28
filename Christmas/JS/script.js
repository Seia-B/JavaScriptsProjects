// Automatic Slideshow
let slideIndex = 0;
const slides = document.querySelectorAll('.slide');

function showSlides() {
    slides.forEach(slide => {
        slide.classList.remove('active');
    });
    
    slideIndex++;
    if (slideIndex > slides.length) {
        slideIndex = 1;
    }
    
    slides[slideIndex - 1].classList.add('active');
    setTimeout(showSlides, 3000); // Change slide every 3 seconds
}

// Start slideshow when page loads
document.addEventListener('DOMContentLoaded', () => {
    showSlides();
});

// Smooth Scrolling for Navigation Links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        }
    });
});

// Modal Contact Form
const contactBtn = document.getElementById('contactBtn');
const modal = document.getElementById('contactModal');
const closeBtn = document.querySelector('.close');
const contactForm = document.getElementById('contactForm');

// Open modal when contact button is clicked
contactBtn.addEventListener('click', () => {
    modal.style.display = 'block';
});

// Close modal when X is clicked
closeBtn.addEventListener('click', () => {
    modal.style.display = 'none';
});

// Close modal when clicking outside of it
window.addEventListener('click', (e) => {
    if (e.target === modal) {
        modal.style.display = 'none';
    }
});

// Handle form submission
contactForm.addEventListener('submit', (e) => {
    e.preventDefault();
    
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const message = document.getElementById('message').value;
    
    // Show success message 
    alert(`Thank you for your message, ${name}! 🎄\n\nWe'll get back to you at ${email} soon!\n\nHappy Holidays! ✨`);
    
    // Reset form and close modal
    contactForm.reset();
    modal.style.display = 'none';
});

// Add snowflake animation effect 
function createSnowflake() {
    const snowflake = document.createElement('div');
    snowflake.innerHTML = '❄';
    snowflake.style.position = 'fixed';
    snowflake.style.top = '-20px';
    snowflake.style.left = Math.random() * window.innerWidth + 'px';
    snowflake.style.fontSize = (Math.random() * 20 + 10) + 'px';
    snowflake.style.color = 'white';
    snowflake.style.opacity = Math.random();
    snowflake.style.pointerEvents = 'none';
    snowflake.style.zIndex = '1';
    
    document.body.appendChild(snowflake);
    
    let pos = -20;
    const fallSpeed = Math.random() * 2 + 1;
    const drift = Math.random() * 2 - 1;
    
    const fall = setInterval(() => {
        pos += fallSpeed;
        const currentLeft = parseFloat(snowflake.style.left);
        snowflake.style.top = pos + 'px';
        snowflake.style.left = (currentLeft + drift) + 'px';
        
        if (pos > window.innerHeight) {
            clearInterval(fall);
            snowflake.remove();
        }
    }, 20);
}

// Create snowflakes periodically
setInterval(createSnowflake, 300);

// Highlight active navigation link on scroll
const sections = document.querySelectorAll('.section');
const navLinks = document.querySelectorAll('.navbar a');

window.addEventListener('scroll', () => {
    let current = '';
    
    sections.forEach(section => {
        const sectionTop = section.offsetTop;
        const sectionHeight = section.clientHeight;
        if (pageYOffset >= sectionTop - 200) {
            current = section.getAttribute('id');
        }
    });
    
    navLinks.forEach(link => {
        link.style.color = 'white';
        if (link.getAttribute('href') === '#' + current) {
            link.style.color = '#FFD700';
        }
    });
});