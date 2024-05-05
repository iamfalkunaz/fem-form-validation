const form = document.getElementById('form');
const firstName = document.getElementById('firstName');
const lastName = document.getElementById('lastName');
const email = document.getElementById('email');
const password = document.getElementById('password');
// const button  = document.querySelector('.btn');

form.addEventListener('submit',e=>{
    e.preventDefault();
 
    validateInputs();
});

const setError = (element,message)=>{
    const inputControl = element.parentElement;
    const errorDisplay = inputControl.querySelector('.error');

    errorDisplay.innerText = message;
    inputControl.classList.add('error');
    inputControl.classList.remove('success')
}

const setSuccess = (element)=>{
    const inputControl = element.parentElement;
    const errorDisplay = inputControl.querySelector('.error');

    errorDisplay.innerText = '';
    inputControl.classList.add('success');
    inputControl.classList.remove('error')
}

const validateEmail = email => {
    const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(String(email).toLowerCase());
}

const validateInputs = ()=>{
    const firstNameValue = firstName.value.trim();
    const lastNameValue = lastName.value.trim();
    const emailValue =  email.value.trim();
    const passwordValue = password.value.trim();

    // FIRST NAME
    if(firstNameValue === ''){
        setError(firstName,"First Name cannot be empty");
    }else{
        setSuccess(firstName);
    }


    // LAST NAME
    if(lastNameValue === ''){
        setError(lastName,"Last Name cannot be empty");
    }else{
        setSuccess(lastName);
    }

    // EMAIL

    if(emailValue === ''){
        setError(email,"Email cannot be empty");
    }
    else if(!validateEmail(emailValue)){
        setError(email,"Please enter valid email address");
    }
    else{
        setSuccess(email);
    }


    // PASSWORD

    if(passwordValue === ''){
        setError(password,"Password cannot be empty");
    }
    else if (passwordValue.length < 8 ) {
        setError(password, 'Password must be of atleast 8 characters.')
    } else {
        setSuccess(password);
    }

}

