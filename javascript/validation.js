/**
 * validation.js - Form validation for contact and enquiry forms.
 */
document.addEventListener('DOMContentLoaded', () => {
    // Contact Form Validation
    const contactForm = document.getElementById('contactform') || document.querySelector('.contact-form');
    if (contactForm) {
        contactForm.addEventListener('submit', (e) => {
            let isValid = true;

            const fullname = contactForm.querySelector('input[name="fullname"]');
            const phone = contactForm.querySelector('input[name="phone"]');
            const email = contactForm.querySelector('input[name="email"]');
            const comment = contactForm.querySelector('textarea[name="comment"]');

            // Validate Full Name
            if (fullname && fullname.value.trim().length < 3) {
                isValid = false;
                showError(fullname, 'Full name must be at least 3 characters.');
            } else if (fullname) {
                clearError(fullname);
            }

            // Validate Phone Number (South African format support)
            const phoneRegex = /^(\+27|0)[0-9]{9}$/;
            if (phone && !phoneRegex.test(phone.value.trim().replace(/\s+/g, ''))) {
                isValid = false;
                showError(phone, 'Please enter a valid phone number (e.g., 0418185643 or +27...).');
            } else if (phone) {
                clearError(phone);
            }

            // Validate Email Address
            const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
            if (email && !emailRegex.test(email.value.trim())) {
                isValid = false;
                showError(email, 'Please enter a valid email address.');
            } else if (email) {
                clearError(email);
            }

            // Validate Message/Comment
            if (comment && comment.value.trim() === '') {
                isValid = false;
                showError(comment, 'Message cannot be empty.');
            } else if (comment) {
                clearError(comment);
            }

            if (!isValid) {
                e.preventDefault();
            } else {
                e.preventDefault();
                alert('Thank you! Your message has been successfully submitted to Siyakhana Legal Advice Centre.');
                contactForm.reset();
            }
        });
    }

    // Enquiry Form Validation (Enquiry.html)
    const enquirySubmitBtn = document.querySelector('.submit-btn');
    if (enquirySubmitBtn) {
        enquirySubmitBtn.addEventListener('click', (e) => {
            const fullname = document.getElementById('fullname');
            const email = document.getElementById('email');
            const category = document.getElementById('category');
            const message = document.getElementById('message');

            let isValid = true;
            let errorMsg = [];

            if (fullname && fullname.value.trim().length < 3) {
                isValid = false;
                errorMsg.push('Full Name is required and must be at least 3 characters.');
            }

            const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
            if (email && !emailRegex.test(email.value.trim())) {
                isValid = false;
                errorMsg.push('A valid Email Address is required.');
            }

            if (category && category.value === '') {
                isValid = false;
                errorMsg.push('Please select an Enquiry Category.');
            }

            if (message && message.value.trim() === '') {
                isValid = false;
                errorMsg.push('Please provide a specific request message.');
            }

            if (!isValid) {
                e.preventDefault();
                alert('Please correct the following errors:\n\n- ' + errorMsg.join('\n- '));
            } else {
                e.preventDefault();
                alert('Enquiry submitted successfully! Siyakhana Legal will get back to you soon.');
            }
        });
    }

    function showError(inputElement, message) {
        inputElement.style.borderColor = '#d9534f';
        let errorSpan = inputElement.nextElementSibling;
        if (!errorSpan || !errorSpan.classList.contains('error-message')) {
            errorSpan = document.createElement('span');
            errorSpan.className = 'error-message';
            errorSpan.style.color = '#d9534f';
            errorSpan.style.fontSize = '0.85rem';
            errorSpan.style.marginTop = '4px';
            errorSpan.style.display = 'block';
            inputElement.parentNode.appendChild(errorSpan);
        }
        errorSpan.textContent = message;
    }

    function clearError(inputElement) {
        inputElement.style.borderColor = '#ccc';
        const errorSpan = inputElement.nextElementSibling;
        if (errorSpan && errorSpan.classList.contains('error-message')) {
            errorSpan.textContent = '';
        }
    }
});