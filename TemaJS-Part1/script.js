"use strict";

console.log("------------Exercitiul 1-----------");
function equals(a, b) {
	if (a === b) {
		return true;
	} else return false;
}
console.log(equals(2, 4));
console.log(equals(4, 4));

console.log("------------Exercitiul 2-----------");
function compare(a, b) {
	if (a < b) {
		return -1;
	} else if (a === b) {
		return 0;
	} else return 1;
}
console.log(compare(2, 4));
console.log(compare(4, 4));
console.log(compare(6, 4));

console.log("------------Exercitiul 3-----------");
function max(a, b) {
	if (a > b) {
		return a;
	} else return b;
}
console.log(max(2, 4));
console.log(max(6, 3));

console.log("------------Exercitiul 4-----------");
function min(a, b) {
	if (a < b) {
		return a;
	} else return b;
}
console.log(min(2, 4));
console.log(min(6, 3));

console.log("------------Exercitiul 5-----------");
function suma(a) {
	return (a * (a + 1)) / 2;
}
console.log(suma(3));
console.log(suma(4));
console.log(suma(5));

console.log("------------Exercitiul 6-----------");
function prim(a) {
	let sum = 0;
	for (let i = a; i > 0; i--) {
		if (a % i === 0) {
			sum++;
		}
	}
	if (sum === 2) {
		return true;
	} else return false;
}
console.log(prim(4));
console.log(prim(5));
console.log(prim(7));
console.log(prim(8));

console.log("------------Exercitiul 7-----------");
function sumaPrim(a) {
	let sum = 0;
	let counter = 0;
	let nr = 0;
	while (counter !== a) {
		if (prim(nr)) {
			sum += nr;
			counter++;
		}
		nr++;
	}
	return sum;
}
console.log(sumaPrim(4));
console.log(sumaPrim(5));
console.log(sumaPrim(7));

console.log("------------Exercitiul 8-----------");
function invers(a) {
	let b = 0;
	while (a) {
		b *= 10;
		b += a % 10;
		a = (a - (a % 10)) / 10;
	}
	return b;
}
console.log(invers(321));
console.log(invers(12456));
console.log(invers(987654321));
console.log(invers(8654));

console.log("------------Exercitiul 9-----------");
function produsImpare(a) {
	let produs = 1;
	let counter = 0;
	let nr = 1;
	while (counter !== a) {
		if (nr % 2 === 1) {
			produs *= nr;
			counter++;
		}
		nr++;
	}
	return produs;
}
console.log(produsImpare(3));
console.log(produsImpare(4));
console.log(produsImpare(5));

console.log("------------Exercitiul 10----------");
const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9];
function contains(arr, nr) {
	let indicator = false;
	for (let i = 0; i < arr.length; i++) {
		if (nr === arr[i]) {
			indicator = true;
		}
	}
	return indicator;
	// return arr.includes(nr); //Se putea asa dar am presupus ca doresti rezolvarea de mai sus
}
console.log(contains(arr, 5));
console.log(contains(arr, 9));
console.log(contains(arr, 10));

console.log("------------Exercitiul 11----------");
const arr2 = [1, 2, "3", 4, "5"];
const arr3 = [1, 2, "3", 4, "5", 6];
function maxArray(arr) {
	let max = 0;
	for (let i = 0; i < arr.length; i++) {
		if (Number(max) < Number(arr[i])) {
			max = arr[i];
		}
	}
	return max;
}
console.log(maxArray(arr2));
console.log(maxArray(arr3));

console.log("------------Exercitiul 12----------");
const arr4 = [1, 2, 3, 4, 41];
function sumMinMax(arr) {
	let min = arr[0];
	let max = 0;
	for (let i = 0; i < arr.length; i++) {
		if (min > arr[i]) {
			min = arr[i];
		}
		if (max < arr[i]) {
			max = arr[i];
		}
	}
	return max + min;
}
console.log(sumMinMax(arr4));

console.log("------------Exercitiul 13----------");
const arr5 = [1, 2, 2, 4, 41];
const arr6 = [1, 2, 3, 4, 41];
const arr7 = ["b", 2, "a", 4, 41];
const arr8 = [1, "a", "a", 4, 41];
function hasDuplicates(arr) {
	for (let i = 0; i < arr.length; i++) {
		for (let y = 0; y < arr.length; y++) {
			if (i !== y && arr[i] === arr[y]) {
				return true;
			}
		}
	}
	return false;
}
console.log(hasDuplicates(arr5));
console.log(hasDuplicates(arr6));
console.log(hasDuplicates(arr7));
console.log(hasDuplicates(arr8));

console.log("------------Exercitiul 14----------");
const arr9 = [3, -4, 6, -8, -9, 5, 6, 2, 1, -4];
function produsPozitive(arr) {
	let produs = 1;
	for (let i = 0; i < arr.length; i++) {
		if (arr[i] >= 0) {
			produs *= arr[i];
		}
	}
	return produs;
}
console.log(produsPozitive(arr9));
console.log(produsPozitive(arr4));

console.log("------------Exercitiul 15----------");
const str1 = `123321`;
const str2 = `123456`;
function palindrom(a) {
	if (a === [...a].reverse().join("")) {
		return true;
	} else return false;
}

console.log(palindrom(str1));
console.log(palindrom(str2));
