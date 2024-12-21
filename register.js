const form = document.getElementById('form');
const name = document.getElementById('name');
const username = document.getElementById('username');
const phone = document.getElementById('phone');
const email = document.getElementById('email');

form.addEventListener('submit', e=> {
    e.preventDefault();

    validateInputs();

});

const setError = (element, message) => {
    const inputControl = element.parentElement;
    const errorDisplay = inputControl.querySelector('.error');

    errorDisplay.innerText = message;
    inputControl.classList.add('error');
    inputControl.classList.remove('success');
}

const setSuccess = element => {
    const inputControl = element.parentElement;
    const errorDisplay = inputControl.querySelector('.error');


    errorDisplay.innerText = '';
    inputControl.classList.add('success');
    inputControl.classList.remove('error');
};

const isValidEmail = email => {
    const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(String(email).toLowerCase());
}

const isValidPhone = phone => { const re = /^\+?[1-9]\d{1,14}$/; return re.test(String(phone)); };


const validateInputs = () => {
    const nameValue = name.value.trim();
     const usernameValue = username.value.trim();
     const phoneValue = phone.value.trim();
     const emailValue = email.value.trim();


if (nameValue === ''){
    setError(name, 'name is required');
} else {
     setSuccess(name);
}

if(usernameValue === ''){
    setError(username, 'user name is required');
}
else {
    setSuccess(username);   
}

if (emailValue === ''){
    setError(email, 'Email is required');
}
else if(!isValidEmail(emailValue)){
    setError(email, 'Provide a valid email address');
}
else{
    setSuccess(email);
}

if (phoneValue === ''){
    setError(phone, 'Phone number is required');
}

else{
    setSuccess(phone);
}

};
