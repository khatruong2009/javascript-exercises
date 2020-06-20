function add (num1, num2) {
	return num1 + num2;
}

function subtract (num1, num2) {
	return num1 - num2;
}

function sum (arr) {
	if (arr.length === 1) {
		return arr[0];
	} else {
		return arr.reduce(function(a,b) {
			return a + b;
		}, 0);
	}
	}


function multiply (arr) {
	let product = 1;
	for (i = 0; i < arr.length; i++) {
		product = product * arr[i];
	}
	return product;
	}


function power(num1, num2) {
	return num1 ** num2;
}

function factorial(num) {
	let total = 1;
	for (i = num; i > 0; i--) {
		total = total * i;
	}
	return total;
}

module.exports = {
	add,
	subtract,
	sum,
	multiply,
    power,
	factorial
}