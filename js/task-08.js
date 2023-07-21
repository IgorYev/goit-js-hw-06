const formField = document.querySelector(".login-form");
formField.addEventListener("submit", handlerSubmit);
function handlerSubmit(event) {
event.preventDefault();


const objData = {
    email: formField.elements.email.value,
    password: formField.elements.password.value,
}

if (objData.email === "" || objData.password === ""){
    return alert("Please fill in the fields");
}
console.log(objData);
formField.reset();
}