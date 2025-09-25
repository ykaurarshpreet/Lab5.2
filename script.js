// Select all necessary DOM elements (form, inputs).
const registrationformEl = document.getElementById('registrationForm');
const usernameInput = document.getElementById('username');
const emailInput = document.getElementById('email');
const passwordInput = document.getElementById('password');
const confirmPasswordInput = document.getElementById('confirmPassword');

// Select all necessary DOM elements (error message spans).
const usernameErrorEl = document.getElementById('usernameError');
const emailErrorEl = document.getElementById('emailError');
const passwordErrorEl = document.getElementById('passwordError');
const confirmPasswordErrorEl = document.getElementById('confirmPasswordError')



// Load saved username: On page load, check if a username is saved in localStorage. If so, pre-fill the username field.

document.addEventListener('DOMContentLoaded', function(){
    const saveUsername = localStorage.getItem('username');
        if (saveUsername) {
            usernameInput.value = saveUsername;
        }
});



// Real-time validation: Add input event listeners to each field.
usernameInput.addEventListener('input', function(event){
        console.log(usernameInput.validity.valid);
        if(usernameInput.validity.valueMissing){
            usernameInput.setCustomValidity('We need your username!');
        } else {
            usernameInput.setCustomValidity('');
        }
        //display custom message
        usernameErrorEl.textContent = usernameInput.validationMessage;
        //check browser validation lesson, i think im supposed to add the usernameerrorel thing here or custoim validity
});

//do the same as above
// emailInput
emailInput.addEventListener('input', function(event){
    console.log(emailInput.validity.valid);
    if(emailInput.validity.typeMismatch){
        emailInput.setCustomValidity('Please enter a valid email address, for example name@example.com.');
    } else if (emailInput.validity.valueMissing){
        emailInput.setCustomValidity('We need your email address to contact you!');
    } else {
        emailInput.setCustomValidity('');
    }

    emailErrorEl.textContent = emailInput.validationMessage;
});


// passwordInput
passwordInput.addEventListener('input', function(event){
    console.log(passwordInput.validity.valid);
    if(passwordInput.validity.patternMismatch){
        passwordInput.setCustomValidity('Your password does not meet the requirements, it must be at least 8 characters long, include an uppercase letter, a lowercase letter, and a number.');
    } else if (passwordInput.validity.valueMissing){
        passwordInput.setCustomValidity('Password is required!');
    } else {
        passwordInput.setCustomValidity('');
    }

    passwordErrorEl.textContent = passwordInput.validationMessage;
})

// confirmPasswordInput
confirmPasswordInput.addEventListener('blur', function(event){
    console.log(confirmPasswordInput.validity.valid);
    if(confirmPasswordInput.validity.valueMissing ){
        confirmPasswordInput.setCustomValidity('Confirm your password!');
    } else if (confirmPasswordInput.value !== passwordInput.value){
        confirmPasswordInput.setCustomValidity('Password does not match!');
    } else {
        confirmPasswordInput.setCustomValidity('');
    }

    confirmPasswordErrorEl.textContent = confirmPasswordInput.validationMessage;

})



// Check validity using the Constraint Validation API (inputElement.validity).
// For the “Confirm Password” field, explicitly check if it matches the “Password” field.
// Display appropriate custom error messages in the corresponding <span> elements. Clear messages if valid.

// Perform a final validation check on all fields.
// If all fields are valid:
// Display a success message (e.g., an alert or update a status message on the page).

// Form submission: Add a submit event listener to the form.
// Call event.preventDefault().
// Save the username to localStorage.
registrationformEl.addEventListener('submit', function(event){
    event.preventDefault();
    localStorage.setItem('username', usernameInput.value );
});

// Optionally, reset the form.
// If any field is invalid, ensure error messages are displayed and focus on the first invalid field.