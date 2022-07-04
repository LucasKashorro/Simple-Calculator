let actualNumber = document.getElementById('actual-number');
let lastNumber = document.getElementById('last-number');

let equationOperation;
let result;
let lastNumberCaracter;

let maxCaracter = 15

function number(n) {
    let newActualNumber = actualNumber.innerHTML + n
    actualNumber.innerHTML = newActualNumber.substring(0, maxCaracter)
}

function operation(op) {
    lastNumber.innerHTML = actualNumber.innerHTML + ' ' + op
    lastNumberCaracter = actualNumber.innerHTML
    actualNumber.innerHTML = ''
    equationOperation = op;
    return equationOperation 
}

function submit() {
    lastNumber.innerHTML = ''

    if(equationOperation === '+') {
        actualNumber.innerHTML = parseFloat(lastNumberCaracter) + parseFloat(actualNumber.innerHTML)
    } else if(equationOperation === '-') {
        actualNumber.innerHTML = parseFloat(lastNumberCaracter) - parseFloat(actualNumber.innerHTML)
    } else if(equationOperation === '*') {
        actualNumber.innerHTML = parseFloat(lastNumberCaracter) * parseFloat(actualNumber.innerHTML)
    } else if(equationOperation === '/') {
        actualNumber.innerHTML = parseFloat(lastNumberCaracter) / parseFloat(actualNumber.innerHTML)
    }
}

function clearAll() {
    equationOperation = ''
    lastNumberCaracter = ''
    lastNumber.innerHTML = ''
    actualNumber.innerHTML = ''
}

function simpleClear() {
    let actualNumberArray = actualNumber.innerHTML.split('')
    let newNumber = actualNumberArray.splice(0,actualNumberArray.length-1)
    actualNumber.innerHTML = newNumber.toString().replace(/,/g, '')
}