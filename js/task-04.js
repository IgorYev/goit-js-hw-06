const counter = document.getElementById('counter');

const decre = counter.querySelector("[data-action=decrement]");
const incre= counter.querySelector("[data-action=increment]");
const value = counter.querySelector("#value");

let counterValue = 0;

function incrementCounter(evt){
    counterValue += 1;
    value.textContent = counterValue;
}

function decrementCounter(evt){
    counterValue -= 1;
    value.textContent = counterValue;
}

decre.addEventListener('click', decrementCounter);
incre.addEventListener('click', incrementCounter);