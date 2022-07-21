/*
input: 1 + 2
output: 3

input 1 + 4 + 5 - 3
output: 1 + 4 -> 5 + 5 -> 10 - 3 = 7

let num1 = 0.00
let num2 = 0.00

on number click, 
  operandDisplay.textContent = '';
  num1 += this.textContent;
  operandDisplay.textContent = num1;
  equation.textContent = num1;

on operator click,
  equationDisplay.textContent  += this.textContent;
  num1 = null;


  






*/





const operands = document.querySelectorAll('.operand');
const operators = document.querySelectorAll('.operator');
const operandDisplay = document.querySelector('#operand-display');
const equationDisplay = document.querySelector('#equation-display');
const clearButton = document.querySelector('#clear');
const deleteButton = document.querySelector('#delete');
const equal = document.querySelector('.equal');
let result = null;
let roundedResult = null;
let num1 = '';
let equation = '';

operands.forEach( (operand) => {
  operand.addEventListener('click', showOperand);
})

operators.forEach( (operator) => {
  operator.addEventListener('click', showOperator);
})

equal.addEventListener('click', operate);

clearButton.addEventListener('click', clear);

deleteButton.addEventListener('click', backspace);


function backspace () {
  let oldOperandDisplay = operandDisplay.textContent.split('');
  oldOperandDisplay.pop();

  let oldEquationDisplay = equationDisplay.textContent.split('');
  oldEquationDisplay.pop();

  let newOperandDisplay = oldOperandDisplay.join('');
  let newEquationDisplay = oldEquationDisplay.join('');
  
  operandDisplay.textContent = newOperandDisplay;
  equationDisplay.textContent = newEquationDisplay;

}


function clear () {
  operandDisplay.textContent = '0.00';
  equationDisplay.textContent = '';
  num1 = '';
  num2 = '';
  equation = '';
  result = null;
  roundedResult = null;
}


function showOperand () {
  operandDisplay.textContent = '';
  num1 += this.textContent;
  operandDisplay.textContent = parseFloat(num1);
  equationDisplay.textContent = equation + parseFloat(num1);
}


function showOperator () {
  if (equationDisplay.textContent.match(/[+-/x÷]+/)) {
    operate();
    equationDisplay.textContent = roundedResult;
  }

  /* if (equationDisplay.textContent.match(/[=]+/)) {
    placeHolder = equationDisplay.textContent.split('=');
    placeHolder.pop();
    equationDisplay.textContent = placeHolder;
  }
  */

  equationDisplay.textContent += this.textContent;
  equation = equationDisplay.textContent;
  num1 = '';
}


function operate () {
  let [num1, num2] = equationDisplay.textContent.replace('=', '').split(/[+-/x÷]+/);
  let operator = equationDisplay.textContent;

  if (operator.match(/[+]+/)) {
    result = add(num1, num2);
  }
  else if (operator.match(/[-]+/)) {
    result = subtract(num1, num2);
  }
  else if (operator.match(/[x]+/)) {
    result = multiply(num1, num2);
  }
  else if (operator.match(/[÷]+/)) {
    result = divide(num1, num2);
  }
  
  roundedResult = result.toString().substr(0,12);
  operandDisplay.textContent = roundedResult;

}


function add (num1, num2) {
  let sum = Number(num1) + Number(num2);
  return sum;
};
  
  
function subtract (num1, num2) {
  let difference = Number(num1) - Number(num2);
  return difference;
};
  

function multiply (num1, num2) {
  let product = Number(num1) * Number(num2);
  return product;
};


function divide (num1, num2) {
  let quotient = null;
  return num2 == 0 ? 'NICE TRY' : Number(num1) / Number(num2);
};
  
