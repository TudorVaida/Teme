"use strict";

console.log("------------Exercitiul 1-----------");
/**O functie "equals" care primeste 2 parametrii si returneaza daca cei 2 parametrii sunt egali, strict */
function equals(a, b) {
	if (a === b) {
		return true;
	} else return false;
}
console.log(equals(2, 4));
console.log(equals(4, 4));

console.log("------------Exercitiul 2-----------");
/**O functie "compare" care primeste 2 parametrii si returneaza -1 daca primul e mai mic ca al doilea, 0 daca sunt egale si 1 daca primul e mai mare ca al doilea */
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
/**O functie "max" care primeste 2 parametrii si returneaza maximul dintre cele 2 */
function max(a, b) {
	if (a > b) {
		return a;
	} else return b;
}
console.log(max(2, 4));
console.log(max(6, 3));

console.log("------------Exercitiul 4-----------");
/** O functie "min" care primeste 2 parametrii si returneaza minimul dintre cele 2*/
function min(a, b) {
	if (a < b) {
		return a;
	} else return b;
}
console.log(min(2, 4));
console.log(min(6, 3));

console.log("------------Exercitiul 5-----------");
/**O functie "suma" care primeste 1 parametru, numar intreg si returneaza suma primelor N numere naturale pozitive (exemplu: daca N este 3, trebuie sa returneze 6) */
function suma(a) {
	return (a * (a + 1)) / 2;
}
console.log(suma(3));
console.log(suma(4));
console.log(suma(5));

console.log("------------Exercitiul 6-----------");
/**O functie "prim" care primeste 1 parametru si returneaza true/false daca N este numar prim sau nu (restul impartirii la 1 si la N ==0) */
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
/**O functie "sumaPrime" care primeste 1 parametru si returneaza suma primelor N numere prime (pentru N=5 trebuie sa returneze 2+3+5+7+11=28) */
function sumaPrime(a) {
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
console.log(sumaPrime(4));
console.log(sumaPrime(5));
console.log(sumaPrime(7));

console.log("------------Exercitiul 8-----------");
/**O functie "invers" care primeste un parametru de tip numar si intoarce inversul acestuia (ca numar) (123 => 321) */
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
/**O functie "produsImpare" care primeste 1 parametru si returneaza produsul primelor N numere impare pozitive (pentru N=5; returneaza 1*3*5*7*9=945) */
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
/**O functie "contains" care primeste 2 parametri(arr - array de nr intregi si x - numar) si verifica daca x exista in array (rezultatul este true/false) */
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
/**O functie "maxArray" care primeste un array si returneaza valoarea maxima (ar trebui sa functioneze si pentru numere si pentru stringuri) */
const arr2 = [1, 2, "3", 4, "5"];
const arr3 = [1, 2, "3", 4, "5", 6];
const arrN = [-1, -2, -3];
const arrS = ["aas", "asa", "bbb", "bbbb"];
function maxArray(arr) {
	let max = arr[0];
	for (let i = 0; i < arr.length; i++) {
		if (max < arr[i]) {
			max = arr[i];
		}
	}
	return max;
}
console.log(maxArray(arr2));
console.log(maxArray(arr3));
console.log(maxArray(arrS));
console.log(maxArray(arrN));

console.log("------------Exercitiul 12----------");
/**O functie "sumMinMax" care primeste un array de numere si returneaza suma dintre valoare maxima si valoare minima */
const arr4 = [1, 2, 3, 4, 41];
function sumMinMax(arr) {
	let min = arr[0];
	let max = arr[0];
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
console.log(sumMinMax(arrN));

console.log("------------Exercitiul 13----------");
/**O functie "hasDuplicates" care primeste un array si returneaza daca exista duplicate intr-un array primit ca parametru (true/false) */
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
/**O functie "produsPozitive" care primeste un array si returneaza produsul numerelor pozitive intr-un array primit ca parametru
 */
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
/**O functie "palindrom" care primeste un string si returneaza daca este palindrom (inversul == originalul, ex: "1234321", "55", "787") (true/false) */
const str1 = `123321`;
const str2 = `123456`;
function palindrom(a) {
	if (a === [...a].reverse().join("")) {
		return true;
	} else return false;
}

console.log(palindrom(str1));
console.log(palindrom(str2));
