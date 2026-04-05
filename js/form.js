let form = document.forms[0];

let isValid = false;

let namePattern = /^[a-zA-Z]{3,20}$/;
let phonePattern = /^01[0,1,2,5][0-9]{8}$/;
let emailPattern = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;

let fnameForm = form['first-name'];
let lnameForm = form['last-name'];
let phoneForm = form['phone'];
let emailForm = form['email'];

fnameForm.addEventListener('input', (e) => {
    if(fnameForm.value == "")
    {
        isValid = false;
        showError(fnameForm, "required");
    }
    if(namePattern.test(fnameForm.value)){
        isValid = true;
        showSuccess(fnameForm, "fine");
    }else{
        isValid = false;
        showError(fnameForm, "invalid");
    }
})

lnameForm.addEventListener('input', (e) => {
    if(lnameForm.value == "")
    {
        isValid = false;
        showError(lnameForm, "required");
    }
    if(namePattern.test(lnameForm.value)){
        isValid = true;
        showSuccess(lnameForm, "fine");
    }else{
        isValid = false;
        showError(lnameForm, "invalid");
    }
})

phoneForm.addEventListener('input', (e) => {
    if(phoneForm.value == "")
    {
        isValid = false;
        showError(phoneForm, "required");
    }
    if(phonePattern.test(phoneForm.value)){
        isValid = true;
        showSuccess(phoneForm, "fine");
    }else{
        isValid = false;
        showError(phoneForm, "invalid");
    }
})

emailForm.addEventListener('input', (e) => {
    if(emailForm.value == "")
    {
        isValid = false;
        showError(emailForm, "required");
    }
    if(emailPattern.test(emailForm.value)){
        isValid = true;
        showSuccess(emailForm, "fine");
    }else{
        isValid = false;
        showError(emailForm, "invalid");
    }
})

form.addEventListener("submit", (e) => {
    if (!isValid){
        e.preventDefault();
    }
})

function showError(input, msg){
    input.nextElementSibling.classList.add("error");
    input.nextElementSibling.classList.remove("success");
    input.nextElementSibling.innerText = msg;
}
function showSuccess(input, msg){
    input.nextElementSibling.classList.add("success");
    input.nextElementSibling.classList.remove("error");
    input.nextElementSibling.innerText = msg;
}


// =================================

