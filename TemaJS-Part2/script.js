"use strict";

console.log("-------------Exercitiul 1------------");
const str = "edr23fef34fds34";
function getDigits(str) {
	const arr = [...str];
	let arr2 = [];
	for (let i = 0; i < arr.length; i++) {
		if (!isNaN(arr[i])) {
			arr2.push(arr[i]);
		}
	}
	return arr2.join("");
}
console.log(getDigits(str));
console.log("-------------Exercitiul 2------------");
function getLetters(str) {
	const arr = [...str];
	let arr2 = [];
	for (let i = 0; i < arr.length; i++) {
		if (arr[i].match(/[a-zA-Z]+/g)) {
			arr2.push(arr[i]);
		}
	}
	return arr2.join("");
}
console.log(getLetters(str));
console.log("-------------Exercitiul 3------------");
function getFirst5Letters(str) {
	const arr = [...str];
	let arr2 = [];
	for (let i = 0; i < arr.length; i++) {
		if (arr[i].match(/[a-zA-Z]+/g) && arr2.length < 5) {
			arr2.push(arr[i]);
		}
	}
	return arr2.join("");
}
console.log(getFirst5Letters(str));
console.log("-------------Exercitiul 4------------");

const arr2 = ["a", "b", "c", "d"];
function concatenate(arr) {
	let str = "";
	for (let i = 0; i < arr.length; i++) {
		str += arr[i];
	}
	return str;
}
console.log(concatenate(arr2));
console.log("-------------Exercitiul 5------------");
const arr3 = ["ace", "b22", "c44fdsf", "d323f"];
function getAllDigits(arr) {
	let str = "";
	for (let i = 0; i < arr.length; i++) {
		str += getDigits(arr[i]);
	}
	return str;
}
console.log(getAllDigits(arr3));
console.log("-------------Exercitiul 6------------");
function invertAllStrings(str) {
	return str.map((elem) => [...elem].reverse().join(""));
}
console.log(invertAllStrings(arr3));
console.log("-------------Exercitiul 7------------");
function factorial(nr) {
	if (nr === 0 || nr === 1) {
		return 1;
	}
	for (let i = nr - 1; i >= 1; i--) {
		nr *= i;
	}
	return nr;
}
console.log(factorial(0));
console.log(factorial(3));
console.log(factorial(5));
console.log("-------------Exercitiul 8------------");
function cmmdc(a, b) {
	while (a != b) {
		if (a > b) {
			a = a - b;
		} else b = b - a;
	}
	return a;
}
console.log(cmmdc(2, 5));
console.log(cmmdc(15, 5));
console.log(cmmdc(124, 34632));
console.log("-------------Exercitiul 9------------");
function cmmmc(a, b) {
	let m = a;
	let n = b;
	while (m != n) {
		if (m < n) {
			m = m + a;
		} else n = n + b;
	}
	return n;
}
console.log(cmmmc(2, 5));
console.log(cmmmc(15, 5));
console.log(cmmmc(124, 34632));
console.log("-------------Exercitiul 10------------");
function divizori(nr) {
	let arr = [];
	for (let i = 2; i < nr; i++) {
		if (nr % i === 0) {
			arr.push(i);
		}
	}
	return arr;
}
console.log(divizori(6));
console.log(divizori(8));
console.log(divizori(10));
console.log("-------------Exercitiul 11------------");
function palindrom(nr) {
	nr = String(nr);
	if (nr === [...nr].reverse().join("")) {
		return true;
	} else return false;
}
console.log(palindrom(123321));
console.log(palindrom(123234254));
console.log(palindrom(567765));
console.log("-------------Exercitiul 12------------");
const arr5 = [1, 2, 3, 4, 5, 6, 7, 8, 9];
function sort(arr) {
	let arrPar = [];
	arr.forEach((elem) => {
		if (elem % 2 === 0) {
			arrPar.push(elem);
		}
	});

	return arrPar.sort((a, b) => a - b);
}
console.log(sort(arr5));
console.log("-------------Exercitiul 13------------");
function sortAscDesc(arr) {
	const arrPar = sort(arr);
	const arrImpar = [];
	arr.forEach((elem) => {
		if (elem % 2 !== 0) {
			arrImpar.push(elem);
		}
		arrImpar.sort((a, b) => b - a);
	});
	arrImpar.forEach((elem) => arrPar.push(elem));
	return arrPar;
}
console.log(sortAscDesc(arr5));
console.log("-------------Exercitiul 14------------");
const arr6 = [1, 2, 3, 4, 5, 6, 7, 8, 9];

function binarySearch(arr, nr) {
	let start = 0;
	let end = arr.length - 1;
	while (start <= end) {
		let mid = start + Math.floor((end - start) / 2);
		if (nr === arr[mid]) {
			return true;
		}
		if (nr < arr[mid]) {
			end = mid - 1;
		} else {
			start = mid + 1;
		}
	}
	return false;
}
console.log(binarySearch(arr6, 3));
console.log(binarySearch(arr6, 11));
console.log(binarySearch(arr6, 8));

console.log("-------------Exercitiul 15------------");
function countBinarySearch(arr, nr) {
	let start = 0;
	let end = arr.length - 1;
	let i = 0;
	while (start <= end) {
		i++;
		let mid = start + Math.floor((end - start) / 2);
		if (nr === arr[mid]) {
			return i;
		}
		if (nr < arr[mid]) {
			end = mid - 1;
		} else {
			start = mid + 1;
		}
	}
	return i;
}
console.log(countBinarySearch(arr6, 3));
console.log(countBinarySearch(arr6, 13));
console.log(countBinarySearch(arr6, 8));
