 document.getElementById('contactForm').addEventListener('submit', function(e) {
            e.preventDefault();
            
            const name = document.getElementById('name').value.trim();
            const email = document.getElementById('email').value.trim();
            const phone = document.getElementById('phone').value.trim();
            const subject = document.getElementById('subject').value.trim();
            const message = document.getElementById('message').value.trim();
            
            if (name === '') {
                alert('Please enter your full name');
                return;
            }
            
            if (email === '') {
                alert('Please enter your email address');
                return;
            }
            
            if (phone === '') {
                alert('Please enter your phone number');
                return;
            }
            
            if (subject === '') {
                alert('Please enter a subject');
                return;
            }
            
            if (message === '') {
                alert('Please enter a message');
                return;
            }
            
            alert('Form submitted successfully!');
            this.reset();
        });