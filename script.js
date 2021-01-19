const calculator = document.querySelector('#calculator');
const display = document.querySelector('#display');
let current = 0

const currentDisplay = (newValue) => {
    current += newValue
    display.textContent = current

}


calculator.addEventListener('click', (event) => {

    let value = parseInt(event.target.textContent);

    console.log(typeof(current))
    currentDisplay(value)
})