const changeSizeControl = document.getElementById("font-size-control");
const textSpan = document.getElementById("text");

function newFontSize() {
    const fontSize = changeSizeControl.value + 'px';
    textSpan.style.fontSize = fontSize;
}

changeSizeControl.addEventListener('input', newFontSize);