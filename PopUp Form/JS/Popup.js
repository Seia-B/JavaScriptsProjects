// Get modal elements
const rewardsModal = document.getElementById('rewardsModal');
const successModal = document.getElementById('successModal');
const openRewardsBtn = document.getElementById('openRewardsBtn');
const closeBtn = document.querySelector('.close');
const closeSuccessBtn = document.querySelector('.close-success');
const closeActionBtn = document.getElementById('closeSuccessBtn');
const form = document.getElementById('rewardsForm');

// Open rewards modal
openRewardsBtn.addEventListener('click', function() {
    rewardsModal.style.display = 'block';
    document.body.style.overflow = 'hidden'; // Prevent background scrolling
});

// Close rewards modal
closeBtn.addEventListener('click', function() {
    rewardsModal.style.display = 'none';
    document.body.style.overflow = 'auto';
});

// Close success modal (X button)
closeSuccessBtn.addEventListener('click', function() {
    successModal.style.display = 'none';
    document.body.style.overflow = 'auto';
});

// Close success modal (action button)
closeActionBtn.addEventListener('click', function() {
    successModal.style.display = 'none';
    document.body.style.overflow = 'auto';
});

// Close modals when clicking outside
window.addEventListener('click', function(e) {
    if (e.target === rewardsModal) {
        rewardsModal.style.display = 'none';
        document.body.style.overflow = 'auto';
    }
    if (e.target === successModal) {
        successModal.style.display = 'none';
        document.body.style.overflow = 'auto';
    }
});

// Close modal on Escape key
document.addEventListener('keydown', function(e) {
    if (e.key === 'Escape') {
        if (rewardsModal.style.display === 'block') {
            rewardsModal.style.display = 'none';
            document.body.style.overflow = 'auto';
        }
        if (successModal.style.display === 'block') {
            successModal.style.display = 'none';
            document.body.style.overflow = 'auto';
        }
    }
});

// Form validation and submission
form.addEventListener('submit', function(e) {
    e.preventDefault();
    
    // Get form values
    const name = document.getElementById('name').value.trim();
    const email = document.getElementById('email').value.trim();
    const phone = document.getElementById('phone').value.trim();
    
    // Validate name
    if (name === '') {
        alert('Please enter your full name');
        document.getElementById('name').focus();
        return;
    }
    
    // Validate email
    if (email === '') {
        alert('Please enter your email address');
        document.getElementById('email').focus();
        return;
    }
    
    // Basic email format validation
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailPattern.test(email)) {
        alert('Please enter a valid email address');
        document.getElementById('email').focus();
        return;
    }
    
    // Validate phone
    if (phone === '') {
        alert('Please enter your phone number');
        document.getElementById('phone').focus();
        return;
    }
    
    // If all validations pass, show success modal
    rewardsModal.style.display = 'none';
    successModal.style.display = 'block';
    
    // Reset form
    form.reset();
    
    // Optional: Log the submission (in real app, you'd send this to a server)
    console.log('Rewards Program Signup:', {
        name: name,
        email: email,
        phone: phone,
        timestamp: new Date().toISOString()
    });
});