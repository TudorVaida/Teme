"use strict";

const shop = {
	list: [
		{
			item: "Lapte",
			marked: false,
		},
	],
};

function updateUI() {
	const tableBody = document.querySelector("tbody");
	let str = "";
	for (let i = 0; i < shop.list.length; i++) {
		str += `
    <tr>
        <td class="item${i} ${shop.list[i].marked ? "buyed" : ""} " >${
			shop.list[i].item
		}</td>
        <td>
        <button onclick="markAsBuyed(${i})" class="btnMark btn">Mark as buyed</button>
    </td>`;
	}
	tableBody.innerHTML = str;
}
function firstCapitalLeyter(str) {
	let arr = [...str];
	let strFinal =
		arr[0].toUpperCase() +
		arr
			.map((el) => el.toLowerCase())
			.slice(1)
			.join("");
	return strFinal;
}
function addItem() {
	const input = document.querySelector("input");
	if (input.value !== "") {
		shop.list.push({ item: firstCapitalLeyter(input.value), marked: false });
		input.value = "";
		input.focus();
		updateUI();
	}
}
function addItemEnter(event) {
	if (event.keyCode === 13) {
		addItem();
	}
}
function markAsBuyed(idx) {
	const item = document.querySelector(`.item${idx}`);
	item.classList.toggle("buyed");
	shop.list[idx].marked = !shop.list[idx].marked;
}
function sortAsc() {
	shop.list.sort(function (a, b) {
		if (a.item < b.item) {
			return -1;
		}
		if (a.item > b.item) {
			return 1;
		}
	});

	updateUI();
}
function sortDesc() {
	shop.list.sort(function (a, b) {
		if (a.item < b.item) {
			return 1;
		}
		if (a.item > b.item) {
			return -1;
		}
	});
	updateUI();
}
