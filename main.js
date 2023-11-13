const add = function(num1, num2) {
	return num1 + num2;
};

const subtract = function(num1, num2) {
	return num1 - num2;
};

// const multiply = function(arr) {
//   return arr.reduce((prod, current) => prod * current,1);
// };

const power = function(num1, num2) {
	return num1 ** num2;
};

const factorial = function(num1) {
	let arr = Array.from(Array(num1+1).keys());
    arr.splice(0,1);
    return fact =  multiply(arr);
};