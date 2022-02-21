// let buttonPlus = document.getElementById('buttonPlus');
// let buttonMinus = document.getElementById('buttonMinus');
// let buttonMultiply = document.getElementById('buttonMultiply');
// let buttonDivide = document.getElementById('buttonDivide');

let operationButtons = document.getElementsByClassName('buttonOperation')

function makeOperation(operand) {
    let input1 = document.getElementById('number1');
    let input2 = document.getElementById('number2');

    let number1 = Number(input1.value);
    let number2 = Number(input2.value);
    let result
    if (operand === '+') {
         result = number1 + number2
    }else if (operand === '-'){
         result = number1 - number2
    }else if(operand === '*'){
        result = number1 * number2
    }else if(operand === '/'){
         result = number1 / number2
    }else{
        window.alert('Неизвестная операция')
    }
    window.alert(result)
}
function onButtonClick(eventObject) {
    let currentButton = eventObject.currentTarget
    let currentOperand = currentButton.innerHTML
    makeOperation(currentOperand);
}

//let buttonsOperations = [buttonPlus, buttonMinus, buttonMultiply, buttonDivide]

for (let i = 0; i<operationButtons.length; i++){
    operationButtons[i].addEventListener('click', onButtonClick)
}




