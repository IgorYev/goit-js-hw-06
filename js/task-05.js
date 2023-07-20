const nameInput = document.getElementById('name-input');
const nameOutput = document.getElementById('name-output');

function updateNameOutput() {
  const name = nameInput.value;

  if (name.length === 0) {
    nameOutput.textContent = 'Anonymous';
  } else {
    nameOutput.textContent = name;
  }
}

nameInput.addEventListener('input', updateNameOutput);