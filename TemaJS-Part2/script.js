"use strict";
console.log("-------------Exercitiul 1------------");
/** O functie "getDigits" care primeste un sir de caractere si returneaza cifrele din sirul respectiv*/
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
/** functie "getLetters" care primeste un sir de caractere si returneaza doar literele din sirul respectiv */
function isOnlyLetters(str) {
	const arr = [...str];
	let indicator = true;
	for (let i = 0; i < arr.length; i++) {
		let y = arr[i].charCodeAt();
		if (!((y >= 65 && y <= 90) || (y >= 97 && y <= 122))) {
			indicator = false;
		}
	}
	return indicator;
}
function getLetters(str) {
	const arr = [...str];
	let arr2 = [];
	for (let i = 0; i < arr.length; i++) {
		if (isOnlyLetters(arr[i])) {
			arr2.push(arr[i]);
		}
	}
	return arr2.join("");
}
console.log(getLetters(str));
console.log("-------------Exercitiul 3------------");
/**O functie "getFirst5Letters" care primeste un sir de caractere si returneaza primele 5 litere(daca exista) */
function getFirst5Letters(str) {
	const arr = [...str];
	let arr2 = [];
	for (let i = 0; i < arr.length; i++) {
		if (isOnlyLetters(arr[i]) && arr2.length < 5) {
			arr2.push(arr[i]);
		}
	}
	return arr2.join("");
}
console.log(getFirst5Letters(str));
console.log("-------------Exercitiul 4------------");
/**O functie "concatenate" care primeste o lista de siruri de caractere si returneaza sirurile concatenate */

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
/**O functie "getAllDigits" care primeste o lista de siruri de caractere si returneaza cifrele din toate sirurile */
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
/**O functie "invertAllStrings" care primeste o lista de siruri de caractere si returneaza lista de siruri de caractere inversate
 */
function invertAllStrings(arr) {
	let arrReverse = [];
	for (let i = 0; i < arr.length; i++) {
		let elem = [...arr[i]];
		let reverse = [];
		for (let y = elem.length - 1; y >= 0; y--) {
			reverse.push(elem[y]);
		}
		arrReverse.push(reverse.join(""));
	}
	return arrReverse;

	// return arr.map((elem) => [...elem].reverse().join(""));
}
console.log(invertAllStrings(arr3));
console.log("-------------Exercitiul 7------------");
/**Calculeaza factorialul unui numar ("factorial") */
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
/**Calculeaza cel mai mare divizor comun al 2 numere ("cmmdc") */
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
/**Calculeaza cel mai mic multiplu comun al 2 numere ("cmmmc") */
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
/**Returneaza un array care sa contina toti divizorii unui numar (ex pentru 64: trebuie sa returneze [2,4,8,16,32]) ("divizori") */
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
/**O functie care verifica daca un numar este palindrom (ex: 121, 1234321) ("palindrom") */
function palindrom(nr) {
	nr = String(nr);
	let nrStr = [...nr];
	let arr = [];
	for (let i = nrStr.length - 1; i >= 0; i--) {
		arr.push(nrStr[i]);
	}
	if (nr === arr.join("")) {
		return true;
	} else return false;

	// if (nr === [...nr].reverse().join("")) {
	// 	return true;
	// } else return false;
}
console.log(palindrom(123321));
console.log(palindrom(123234254));
console.log(palindrom(567765));
console.log("-------------Exercitiul 12------------");
/**O functie care sorteaza numerele pare dintr-un sir de numere primit ca parametru. ("sort") */
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
/**O functie care primeste ca parametru un array de numere. Aceasta sorteaza ascendent numerele pare si descendent numerele impare, in cadrul aceluiasi array primit ca parameru. ("sortAscDesc") */
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
/**O functie care primeste 2 parametri(un array si un numar). Folosind binary search verificati daca numarul primit ca parametru se gaseste in array. ("binarySearch") */
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
/**O functie care implementeaza binary search pentru a verifica daca un numar se regaseste intr-un array. Dupa ce se termina executia functiei trebuie sa returnati de cate ori s-a apelat functia recursiv ("countBinarySearch") */

function countBinarySearch(arr, nr) {
	let i = 0;
	function binarySearchRecursive(arr, nr, start, end) {
		if (start > end) return false;
		let mid = Math.floor((start + end) / 2);
		if (nr === arr[mid]) {
			i++;
			return true;
		}
		if (nr < arr[mid]) {
			i++;
			return binarySearchRecursive(arr, nr, start, mid - 1);
		} else {
			i++;
			return binarySearchRecursive(arr, nr, mid + 1, end);
		}
	}
	binarySearchRecursive(arr, nr, 0, arr.length - 1);
	return i;
}
console.log(countBinarySearch(arr6, 3));
console.log(countBinarySearch(arr6, 13));
console.log(countBinarySearch(arr6, 8));
