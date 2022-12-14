const usernameInput = document.querySelector('#username');
const emailInput = document.querySelector('#email');
const passwordInput = document.querySelector('#password');
const confirmPasswordInput = document.querySelector('#confirm-password');
const submitBtn = document.querySelector('#submit');
const registerForm = document.querySelector('.register');
const messageBox = document.querySelector('#message-box');

let emailAvailable = true;
let usernameAvailable = true;

const showError = (checkedInput, messageElement, errorMessage) => {
    messageElement.classList.remove('hidden');
    checkedInput.classList.remove('valid');
    checkedInput.classList.add('invalid');
    messageElement.textContent = errorMessage;
}
const hideError = (checkedInput, messageElement, validMessage) => {
    messageElement.classList.add('hidden');
    checkedInput.classList.add('valid');
    checkedInput.classList.remove('invalid');
    messageElement.textContent = validMessage;
}

const checkRequiredInput = (event) => {
    const errorSpan = event.target.parentElement.querySelector('.error');
    if (event.target.value.trim() == '') {
        showError(event.target, errorSpan, 'Required');
    } else {
        hideError(event.target, errorSpan);
        if (event.target.id === 'username') {
            fetchUrl('POST', '/check-username', { username: usernameInput.value })
                .then(data => {
                    if (data.message == 'Username is already exists') {
                        showError(usernameInput, errorSpan, `Username is already exists`);
                        usernameAvailable = false;
                    } else {
                        hideError(usernameInput, errorSpan);
                        usernameAvailable = true;
                    }
                }).then(checkFormValid())
        }
    }
}

const checkValidEmail = (event) => {
    const errorSpan = emailInput.parentElement.querySelector('.error');
    if (emailInput.value != '') {
        if (!isValidEmail(emailInput.value)) {
            showError(emailInput, errorSpan, `Please enter valid email`);
        } else {
            hideError(emailInput, errorSpan);
            fetchUrl('POST', '/check-email', { email: emailInput.value })
                .then(data => {
                    if (data.message == 'Email is already exists') {
                        showError(emailInput, errorSpan, `Email is already exists`);
                        emailAvailable = false;
                    } else {
                        hideError(emailInput, errorSpan);
                        emailAvailable = true;
                    }
                }).then(checkFormValid())
        }
    }
}

const checkStrongPassword = (event) => {
    const errorSpan = passwordInput.parentElement.querySelector('.error');
    if (passwordInput.value != '') {
        if (!isValidPassword(passwordInput.value)) {
            showError(passwordInput, errorSpan, `Please enter strong password`);
        } else {
            hideError(passwordInput, errorSpan);
        }
    }
}

const checkMatchingPasswords = (event) => {
    const errorSpan = confirmPasswordInput.parentElement.querySelector('.error');
    if (passwordInput.value !== "" && confirmPasswordInput.value != '') {
        if (passwordInput.value !== confirmPasswordInput.value) {
            showError(confirmPasswordInput, errorSpan, `Passwords don't match`);
        } else {
            hideError(confirmPasswordInput, errorSpan);
        }
    }
}

const checkFormValid = (event) => {
    const formInputs = document.querySelectorAll('input:not([type="submit"])');
    const allInputsFilled = Array.from(formInputs).every((input) => input.value);
    if (allInputsFilled
        && passwordInput.value == confirmPasswordInput.value
        && isValidPassword(passwordInput.value)
        && isValidEmail(emailInput.value)
        && emailAvailable
        && usernameAvailable) {
        submitBtn.removeAttribute('disabled');
    } else {
        submitBtn.setAttribute('disabled', 'disabled');
    }
}

function isValidPassword(password) {
    var regex = /^(?=.*[0-9])(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]{6,16}$/;
    return regex.test(password);
}

function isValidEmail(email) {
    const regex = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
    return regex.test(email);
}

submitBtn.onclick = (e) => {
    e.preventDefault();
    /* fetchUrl('POST', '/signup', {
         username: usernameInput.value,
         email: emailInput.value,
         password: passwordInput.value,
     }).then(data => {
         /* messageBox.textContent = 'User is added successfully';
          messageBox.classList.toggle('show')
         console.log(data)
     }
     );*/

    fetch('/signup', {
        headers: {
            'Content-Type': 'application/json',
        },
        method: 'POST',
        body: JSON.stringify({
            username: usernameInput.value,
            email: emailInput.value,
            password: passwordInput.value,
        }),

    })
        .then((data) => data.json()).then((data) => {
            console.log(data)
            if (data.err) {
                console.log(data.err);
            } else {
                let url = document.URL;
                url = url.slice(0, url.lastIndexOf('/'))

                window.location.href = url
                    + data.redirect;
            }
        })
        .catch(() => { console.log('erorrrrrrrrrrrr!'); });




}

usernameInput.addEventListener('blur', checkRequiredInput);
emailInput.addEventListener('blur', checkRequiredInput);
passwordInput.addEventListener('blur', checkRequiredInput);
confirmPasswordInput.addEventListener('blur', checkRequiredInput);

passwordInput.addEventListener('blur', checkMatchingPasswords);
confirmPasswordInput.addEventListener('blur', checkMatchingPasswords);

passwordInput.addEventListener('blur', checkStrongPassword);
emailInput.addEventListener('blur', checkValidEmail);

registerForm.addEventListener('change', checkFormValid)

