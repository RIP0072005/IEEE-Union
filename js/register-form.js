const committees = ["social", "technical", "scouts", "families", "cultural", "sports", "scientific"]
let registeration = document.forms[1];

let ValidRegister = false;

const nameRegex = /^(?=.{9,39}$)\s*(\S+\s+){2,}\S+\s*$/;
let isRegisterOpen = false;
let registerForm = document.querySelector(".register-form");
let registerFormOff = document.querySelector(".register-form-off");
if (isRegisterOpen)
{
    registerForm.style.display = "block";
    registerFormOff.style.display = "none";
}else{
    registerFormOff.style.display = "block";
    registerForm.style.display = "none";    
}


let fnameFormRegist = registeration['full-name'];
let committee = registeration['committee'];
let phoneFormRegist = registeration['phone'];
let emailFormRegist = registeration['email'];
let acceptButton = document.getElementById("accept");
let submitBtn = document.getElementById("submit-btn");

fnameFormRegist.addEventListener('input', (e) => {
    if(fnameFormRegist.value == "")
    {
        ValidRegister = false;
        showError(fnameFormRegist, "required");
    }
    if(nameRegex.test(fnameFormRegist.value)){
        ValidRegister = true;
        showSuccess(fnameFormRegist, "fine");
    }else{
        ValidRegister = false;
        showError(fnameFormRegist, "invalid");
    }
})

committee.addEventListener('change', (e) => {
    if(committee.value == "")
    {
        ValidRegister = false;
        showError(committee, "required");
    }
    if(committees.includes(committee.value)){
        ValidRegister = true;
        showSuccess(committee, "fine");
    }else{
        ValidRegister = false;
        showError(committee, "choose between options");
    }
})

phoneFormRegist.addEventListener('input', (e) => {
    if(phoneFormRegist.value == "")
    {
        ValidRegister = false;
        showError(phoneFormRegist, "required");
    }
    if(phonePattern.test(phoneFormRegist.value)){
        ValidRegister = true;
        showSuccess(phoneFormRegist, "fine");
    }else{
        ValidRegister = false;
        showError(phoneFormRegist, "invalid");
    }
})

emailFormRegist.addEventListener('input', (e) => {
    if(emailFormRegist.value == "")
    {
        ValidRegister = false;
        showError(emailFormRegist, "required");
    }
    if(emailPattern.test(emailFormRegist.value)){
        ValidRegister = true;
        showSuccess(emailFormRegist, "fine");
    }else{
        ValidRegister = false;
        showError(emailFormRegist, "invalid");
    }
})

registeration.addEventListener("submit", (e) => {

    if(fnameFormRegist.value == "" || phoneFormRegist.value == "" || emailFormRegist.value == "" || committee.value){
        e.preventDefault();
    }


    if(!acceptButton.checked & !ValidRegister)
    {
        showError(submitBtn, "required");
        e.preventDefault();
    }
    if (!ValidRegister)
        e.preventDefault();
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
