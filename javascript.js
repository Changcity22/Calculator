/*
input: 1 + 2
output: 3

input 1 + 4 + 5 - 3
output: 1 + 4 -> 5 + 5 -> 10 - 3 = 7



*/





const operands = document.querySelectorAll('.operand');
const operators = document.querySelectorAll('.operator');
const operandDisplay = document.querySelector('#operand-display');
const equationDisplay = document.querySelector('#equation-display');
const clearButton = document.querySelector('#clear');
const equal = document.querySelector('.equal');
let result = null;

operands.forEach( (operand) => {
  operand.addEventListener('click', showOperand);
})

operators.forEach( (operator) => {
  operator.addEventListener('click', showOperator);
  equal.addEventListener('click', showOperator)
})

equal.addEventListener('click', operate);

clearButton.addEventListener('click', clear);


function clear () {
  operandDisplay.textContent = '0.00';
  equationDisplay.textContent = '';
}


function showOperand () {
  operandDisplay.textContent = this.textContent;
  equationDisplay.textContent += this.textContent;
}


function showOperator () {
  equationDisplay.textContent += this.textContent;
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
  operandDisplay.textContent = result;

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
  let quotient = Number(num1) / Number(num2);
  return quotient;
};
  

  const power = function(num1, num2) {
      const expo = num1 ** num2;
    return expo;
  };
  
  const factorial = function(num) {
    let result = 1
  
    for (let i = num; i >= 1; i--) {
      result *= i;
    }
  
    return result;
  };