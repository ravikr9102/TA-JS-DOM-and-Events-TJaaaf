let form = document.querySelector("form");

let usernameError = "";


function handleSubmit(event){
    event.preventDefault();
    console.dir(event.target)

let usernameElm = event.target.elements.username;
console.log(usernameElm.value);

let parentElm = usernameElm.parentElement;

let name = event.target.elements.name.value;
let parentElme = name.parentElement;

let email = event.target.elements.email.value;
let phone = event.target.elements.phone.value;
let password = event.target.elements.password.value;

if(usernameElm.value.length < 4){
    usernameError = "Username can't be less than 4 characters!"
    usernameElm.nextElementSibling.innerText = usernameError;
    parentElm.classList.add('error')
}
if(name.split('').some(e => Number(e))){
    usernameError = "You can't use number in the name field"
    name.nextElementSibling.innerText = usernameError;
    parentElme.classList.add('error')
}
if(!email.includes("@")){
    usernameError = "Email must contain the symbol @"
    email.nextElementSibling.innerText = usernameError;
}
else if(email.length < 7){
    usernameError = "Email must be at least 6 characters"
    email.nextElementSibling.innerText = usernameError;
}
if(`typeof ${phone} == Number`){
    usernameError = "Phone number can only contain numbers"
    phone.nextElementSibling.innerText = usernameError;
}
else if(phone.length <7){
    usernameError = "Phone number can only contain numbers"
    phone.nextElementSibling.innerText = usernameError;
}
if(password !== passwordCheck){
    usernameError = "Password and confirm password must be same."
    password.nextElementSibling.innerText = usernameError;
}

}
form.addEventListener("submit" , handleSubmit);



