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
// let updateDisplay = function() {
//   let nextDigit = '5';
//   displayValue += nextDigit;
//   display.textContent = displayValue;
// };

// for (var i=1; i < digitos.lenght; i++) {
  // console.log(digitos[i]);
digitos.forEach(dig => dig.addEventListener('click', function() {
    let nextDigit = this.id;
    displayValue += nextDigit;
    display.textContent = displayValue
  }));

operadores.forEach(dig => dig.addEventListener('click', function() {
  let nextDigit = this.id;
  if (displayValue[displayValue.length - 1].includes(' ')) {   
  } else {
    displayValue += ' ' + nextDigit + ' ';
  };
  display.textContent = displayValue
}));

borradores.forEach(dig => dig.addEventListener('click', function() {
  displayValue = ''
  display.textContent = displayValue
}));
// for (var i=0; i < digitos.lenght; i++) {
//   digitos[i].addEventListener('click', updateDisplay)
// }




// const factorial = function(num1) {
// 	let arr = Array.from(Array(num1+1).keys());
//     arr.splice(0,1);
//     return fact =  multiply(arr);
// };