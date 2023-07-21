const validInput = document.getElementById('validation-input');

function checkInputLength(event) {
  const expectedLength = parseInt(validInput.dataset.length, 10);

  if (validInput.value.length === expectedLength) {
    validInput.classList.remove('invalid');
    validInput.classList.add('valid');
  } else {
    validInput.classList.remove('valid');
    validInput.classList.add('invalid');
  }
}

validInput.addEventListener('blur', checkInputLength);