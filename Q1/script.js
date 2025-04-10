document.addEventListener('DOMContentLoaded', function() {
    // Get all email input fields and their corresponding buttons
    const introEmailInput = document.querySelector('.intro .cta input[type="email"]');
    const introButton = document.querySelector('.intro .cta button');
    const footerEmailInput = document.querySelector('.footer .cta input[type="email"]');
    const footerButton = document.querySelector('.footer .cta button');

    // Email validation function
    function validateEmail(email) {
        const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return regex.test(email);
    }

    // Add event listeners for the intro section
    if (introEmailInput && introButton) {
        introButton.addEventListener('click', function() {
            handleEmailSubmission(introEmailInput);
        });
        
        introEmailInput.addEventListener('keypress', function(e) {
            if (e.key === 'Enter') {
                handleEmailSubmission(introEmailInput);
            }
        });
    }

    // Add event listeners for the footer section
    if (footerEmailInput && footerButton) {
        footerButton.addEventListener('click', function() {
            handleEmailSubmission(footerEmailInput);
        });
        
        footerEmailInput.addEventListener('keypress', function(e) {
            if (e.key === 'Enter') {
                handleEmailSubmission(footerEmailInput);
            }
        });
    }

    // Handle email submission
    function handleEmailSubmission(inputElement) {
        const email = inputElement.value.trim();
        
        if (email === '') {
            showError(inputElement, 'Please enter your email');
            return;
        }
        
        if (!validateEmail(email)) {
            showError(inputElement, 'Please enter a valid email');
            return;
        }
        
        // If email is valid, remove any error styling
        inputElement.style.borderColor = '#e0e0e0';
        
        // Here you would typically send the email to your server
        alert('Thank you for your interest! We will contact you at: ' + email);
        
        // Reset the input field
        inputElement.value = '';
    }

    // Show error message
    function showError(inputElement, message) {
        // Add red border to indicate error
        inputElement.style.borderColor = 'red';
        
        // You could also add a tooltip or error message near the input
        alert(message);
        
        // Focus on the input field
        inputElement.focus();
    }
});