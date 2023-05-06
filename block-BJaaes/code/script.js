// let form = document.querySelector("form");

// let usernameError = "";


// function handleSubmit(event){
//     event.preventDefault();
//     console.dir(event.target)

// let usernameElm = event.target.elements.username;
// console.log(usernameElm.value);

// let parentElm = usernameElm.parentElement;

// let name = event.target.elements.name.value;
// let parentElme = name.parentElement;

// let email = event.target.elements.email.value;
// let phone = event.target.elements.phone.value;
// let password = event.target.elements.password.value;

// if(usernameElm.value.length < 4){
//     usernameError = "Username can't be less than 4 characters!"
//     usernameElm.nextElementSibling.innerText = usernameError;
//     parentElm.classList.add('error')
// }
// if(name.split('').some(e => Number(e))){
//     usernameError = "You can't use number in the name field"
//     name.nextElementSibling.innerText = usernameError;
//     parentElme.classList.add('error')
// }
// if(!email.includes("@")){
//     usernameError = "Email must contain the symbol @"
//     email.nextElementSibling.innerText = usernameError;
// }
// else if(email.length < 7){
//     usernameError = "Email must be at least 6 characters"
//     email.nextElementSibling.innerText = usernameError;
// }
// if(`typeof ${phone} == Number`){
//     usernameError = "Phone number can only contain numbers"
//     phone.nextElementSibling.innerText = usernameError;
// }
// else if(phone.length <7){
//     usernameError = "Phone number can only contain numbers"
//     phone.nextElementSibling.innerText = usernameError;
// }
// if(password !== passwordCheck){
//     usernameError = "Password and confirm password must be same."
//     password.nextElementSibling.innerText = usernameError;
// }

// }
// form.addEventListener("submit" , handleSubmit);



let form = document.querySelector("form");

let errorMessages = {};

function displayError(name){
    let elm = form.elements[name];
    elm.nextElementSibling.innerText = errorMessages[name];
    elm.parentElement.classList.add("error");
}
function displaySuccess(name){
    let elm = form.elements[name];
    elm.nextElementSibling.innerText = "";
    errorMessages[name] = "";
    elm.parentElement.classList.remove("error");
    elm.parentElement.classList.add("success");
}

function handleSubmit(event){
    event.preventDefault();
    let elements = event.target.elements
    let username = elements.username.value;
    let name = elements.name.value; 
    let email = elements.email.value;
    let phone = elements.phone.value;
    let password = elements.password.value;
    let passwordCheck = elements["password-check"].value;

    // Username can't be less than 4 characters
    if(username.length < 4){
        errorMessages.username = "Username can't be less than 4 characters";
        displayError("username")
    }
    else{
        displaySuccess("username")
    }

    // Name can't be a numbers
    if(!isNaN(name)){
        errorMessages.name = "Name can't be a numbers";
        displayError("name")
    }
    else{
        displaySuccess("name");
    }

    // Email must contain the symbol @
    // Email must be at least 6 characters
    if(!email.includes('@')){
        errorMessages.email = "Email must contain the symbol @";
        displayError("email");
    }
    else if(email.length < 6){
        errorMessages.email = "Email must be at least 6 characters";
        displayError("email");
    }
    else{
        displaySuccess("email")
    }

    // Phone number can only be a number
    // Length of phone number can't be less than 7
    if(isNaN(phone)){
        errorMessages.phone = "Phone number can only be a number";
        displayError("phone");
    }
    else if(phone.length < 7) {
        errorMessages.phone = "Length of phone number can't be less than 7";
        displayError("phone");
    }
    else{
        displaySuccess("phone");
    }

    // password and confirm password must be same
    if(password !== passwordCheck ){
        errorMessages.password = "password and confirm password must be same";
        errorMessages["password-check"] = "password and confirm password must be same"
        displayError("password");
        displayError("password-check");
    }
    else{
        displaySuccess("password");
        displaySuccess("password-check");
    }
   
}
form.addEventListener("submit", handleSubmit);



