let actualNumber = document.getElementById('actual-number');
let lastNumber = document.getElementById('last-number');

let equationOperation;
let result;
let lastNumberCharacters;

let maxCharacters = 15

function number(n) {
    let newActualNumber = actualNumber.innerHTML + n
    actualNumber.innerHTML = newActualNumber.substring(0, maxCharacters)
}

function operation(op) {
    lastNumber.innerHTML = actualNumber.innerHTML + ' ' + op
    lastNumberCharacters = actualNumber.innerHTML
    actualNumber.innerHTML = ''
    equationOperation = op;
    return equationOperation 
}

function submit() {
    lastNumber.innerHTML = ''

    if(equationOperation === '+') {
        actualNumber.innerHTML = parseFloat(lastNumberCharacters) + parseFloat(actualNumber.innerHTML)
    } else if(equationOperation === '-') {
        actualNumber.innerHTML = parseFloat(lastNumberCharacters) - parseFloat(actualNumber.innerHTML)
    } else if(equationOperation === '*') {
        actualNumber.innerHTML = parseFloat(lastNumberCharacters) * parseFloat(actualNumber.innerHTML)
    } else if(equationOperation === '/') {
        actualNumber.innerHTML = parseFloat(lastNumberCharacters) / parseFloat(actualNumber.innerHTML)
    }
}

function clearAll() {
    equationOperation = ''
    lastNumberCharacters = ''
    lastNumber.innerHTML = ''
    actualNumber.innerHTML = ''
}

function simpleClear() {
    let actualNumberArray = actualNumber.innerHTML.split('')
    let newNumber = actualNumberArray.splice(0,actualNumberArray.length-1)
    actualNumber.innerHTML = newNumber.toString().replace(/,/g, '')
}
