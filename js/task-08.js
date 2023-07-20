const formField = document.querySelector(".login-form");
formField.addEventListener("submit", handlerSubmit);

function handlerSubmit(event) {
event.preventDefault()
console.log(formField.elements)


const objData = {
    email: formField.elements.email.value,
    password: formField.elements.password.value,
}

if (objData.email === "" || objData.password === ""){
    return alert("Please fill in the fields");
}
formField.reset()
}

