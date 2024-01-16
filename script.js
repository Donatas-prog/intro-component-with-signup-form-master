const form = document.getElementById('form');
const fName = document.getElementById('first-name');
const lName = document.getElementById('last-name');
const email = document.getElementById('email');
const password = document.getElementById('password');
console.log(lName);
console.log(fName);
form.addEventListener('click', e => {
    e.preventDefault();
    validateInputs();
})
const setError = (element, message) => {
    const inputContainer = element.parentElement;
    const errorDisplay = inputContainer.querySelector('.error-text');

    errorDisplay.innerText = message;
    inputContainer.classList.add('error');
    inputContainer.classList.remove('success');
}

const setSuccess = element => {
    const inputContainer = element.parentElement;
    const errorDisplay = inputContainer.querySelector('.error-text');

    errorDisplay.innerText = '';
    inputContainer.classList.add('success');
    inputContainer.classList.remove('error');
}
const isValidEmail = email => {
    const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
   return re.test(String(email).toLowerCase());
}

const validateInputs = () => {
    const firstNameValue = fName.value.trim();
    const lastNameValue = lName.value.trim();
    const emailValue = email.value.trim();
    const passwordValue = password.value.trim();
    
    if (firstNameValue === '') {
        setError(fName,'First name cannot be empty')
    } else {
        setSuccess(fName)
    }
    if(lastNameValue === '') {
        setError(lName, 'Last name cannot be empty')
    } else {
        setSuccess(lName);
    };

    if(emailValue === '') {
        setError(email, 'Email cannot be empty')
    } else if (!isValidEmail(emailValue)) {
        setError(email, 'Looks like this is not an email')
    } else {
        setSuccess(email);
    }
    if(passwordValue === '') {
        setError(password, 'Password cannot be empty')
    } else {
        setSuccess(password);
    }
        
    
}