const add = function(num1, num2) {
	return num1 + num2;
};

const subtract = function(num1, num2) {
	return num1 - num2;
};

const multiply = function(num1, num2) {
  return num1 * num2;
};

const divide = function(num1, num2) {
    return num1 / num2;
} 

const power = function(num1, num2) {
	return num1 ** num2;
};

const operate = function(operation, num1, num2) {
    return operation(num1, num2);
};

let displayValue = '';
let display = document.querySelector('#display');
display.textContent = displayValue;

let digitos = document.querySelectorAll('.digitos');
let operadores = document.querySelectorAll('.operadores');
let borradores = document.querySelectorAll('.borradores');
let punto = document.querySelector('.punto');
let igual = document.querySelector('.igual');
// let updateDisplay = function() {
//   let nextDigit = '5';
//   displayValue += nextDigit;
//   display.textContent = displayValue;
// };

// for (var i=1; i < digitos.lenght; i++) {
  // console.log(digitos[i]);
digitos.forEach(dig => dig.addEventListener('click', function() {
    let nextDigit = this.id;
    if (displayValue.split([' ']).length <= 3) {
      displayValue += nextDigit;
    }
    display.textContent = displayValue
  }));

operadores.forEach(dig => dig.addEventListener('click', function() {
  let nextDigit = this.id;
  if ((displayValue.slice(-1).includes(' ')) | (displayValue.split([' ']).length > 2)) {   
  } else {
    displayValue += ' ' + nextDigit + ' ';
  };
  display.textContent = displayValue
}));

borradores.forEach(dig => dig.addEventListener('click', function() {
  displayValue = '';
  display.textContent = displayValue
}));

punto.addEventListener('click', function() {
  lastNumber = displayValue.split([' ']).slice(-1)[0];
  if ((lastNumber.includes('.')) | (displayValue.split([' ']).length > 3)) {

  } else { displayValue += '.';
  }
  display.textContent = displayValue
});

igual.addEventListener('click', function() {
  num1 = parseFloat(displayValue.split([' '])[0]);
  op = displayValue.split([' '])[1];
  num2 = parseFloat(displayValue.split([' '])[2]);
  if (op === '+') {
    displayValue = operate(add, num1, num2).toString()
  }
  else if (op === '-') {
    displayValue = operate(subtract,num1, num2).toString()
  }
  else if (op === '*') {
    displayValue = operate(multiply,num1, num2).toString()
  }
  else if (op === '/') {
    displayValue = operate(divide,num1, num2).toString()
  }
  else if (op === '**') {
    displayValue = operate(power,num1, num2).toString()
  }
  display.textContent = displayValue
});

// for (var i=0; i < digitos.lenght; i++) {
//   digitos[i].addEventListener('click', updateDisplay)
// }




// const factorial = function(num1) {
// 	let arr = Array.from(Array(num1+1).keys());
//     arr.splice(0,1);
//     return fact =  multiply(arr);
// };