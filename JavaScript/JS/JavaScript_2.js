const form = document.getElementById('contactForm');
const nameInput = document.getElementById('name');
const emailInput = document.getElementById('email');
const phoneInput = document.getElementById('phone');
const messageInput = document.getElementById('message');
const successMessage = document.getElementById('successMessage');

// Validation functions
function validateName() {
  const value = nameInput.value.trim();
  const error = document.getElementById('nameError');
  
  if (value.length < 2) {
    nameInput.classList.add('invalid');
    nameInput.classList.remove('valid');
    error.classList.add('show');
    return false;
  } else {
    nameInput.classList.remove('invalid');
    nameInput.classList.add('valid');
    error.classList.remove('show');
    return true;
  }
}

function validateEmail() {
  const value = emailInput.value.trim();
  const error = document.getElementById('emailError');
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  
  if (!emailRegex.test(value)) {
    emailInput.classList.add('invalid');
    emailInput.classList.remove('valid');
    error.classList.add('show');
    return false;
  } else {
    emailInput.classList.remove('invalid');
    emailInput.classList.add('valid');
    error.classList.remove('show');
    return true;
  }
}

function validatePhone() {
  const value = phoneInput.value.trim();
  const error = document.getElementById('phoneError');
  const phoneRegex = /^\d{10}$/;
  
  // Phone is optional, so empty is valid
  if (value === '') {
    phoneInput.classList.remove('invalid', 'valid');
    error.classList.remove('show');
    return true;
  }
  
  if (!phoneRegex.test(value.replace(/\D/g, ''))) {
    phoneInput.classList.add('invalid');
    phoneInput.classList.remove('valid');
    error.classList.add('show');
    return false;
  } else {
    phoneInput.classList.remove('invalid');
    phoneInput.classList.add('valid');
    error.classList.remove('show');
    return true;
  }
}

function validateMessage() {
  const value = messageInput.value.trim();
  const error = document.getElementById('messageError');
  
  if (value.length < 10) {
    messageInput.classList.add('invalid');
    messageInput.classList.remove('valid');
    error.classList.add('show');
    return false;
  } else {
    messageInput.classList.remove('invalid');
    messageInput.classList.add('valid');
    error.classList.remove('show');
    return true;
  }
}

// Real-time validation on blur
nameInput.addEventListener('blur', validateName);
emailInput.addEventListener('blur', validateEmail);
phoneInput.addEventListener('blur', validatePhone);
messageInput.addEventListener('blur', validateMessage);

// Real-time validation on input (after first blur)
nameInput.addEventListener('input', function() {
  if (this.classList.contains('invalid') || this.classList.contains('valid')) {
    validateName();
  }
});

emailInput.addEventListener('input', function() {
  if (this.classList.contains('invalid') || this.classList.contains('valid')) {
    validateEmail();
  }
});

phoneInput.addEventListener('input', function() {
  if (this.classList.contains('invalid') || this.classList.contains('valid')) {
    validatePhone();
  }
});

messageInput.addEventListener('input', function() {
  if (this.classList.contains('invalid') || this.classList.contains('valid')) {
    validateMessage();
  }
});

// Form submission
form.addEventListener('submit', function(e) {
  e.preventDefault();
  
  // Validate all fields
  const isNameValid = validateName();
  const isEmailValid = validateEmail();
  const isPhoneValid = validatePhone();
  const isMessageValid = validateMessage();
  
  // If all validations pass, show success message
  if (isNameValid && isEmailValid && isPhoneValid && isMessageValid) {
    successMessage.classList.add('show');
    form.reset();
    
    // Remove validation classes
    [nameInput, emailInput, phoneInput, messageInput].forEach(input => {
      input.classList.remove('valid', 'invalid');
    });
    
    // Hide success message after 5 seconds
    setTimeout(() => {
      successMessage.classList.remove('show');
    }, 5000);
  }
});