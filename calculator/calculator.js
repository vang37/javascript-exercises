function add(a, b) {
	return a + b;
}

function subtract(a, b) {
	return a - b;
}

function sum(array) {
	let start = 0;
	if (array.length == 0) return 0;
	for (let arr of array) {
		start += arr;
	}
	return start;

}

function multiply(array) {
	let start = 1;
	if (array.length == 0) return 0;
	if (array.length == 1) return array[0];
	for (let arr of array) {
		start *= arr;
	}
	return start;
}

function power(base, exp) {
	let val = base;
	if (base != 0 && exp == 0) return 1;
	while (exp > 1) {
		val *= base;
		exp--;
	}
	return val;
}


function factorial(n) {
	if (n == 0 || n < 0) return 1;
	let fact = n;
	while (n > 1) {
		n--;
		fact *= n;
	}
	return fact;
}

module.exports = {
	add,
	subtract,
	sum,
	multiply,
	power,
	factorial
}