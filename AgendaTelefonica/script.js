const contacts = {
	list: [
		{
			nume: "Tudor",
			nrTel: "0744452297",
		},
	],
};

function updateUI() {
	const containerAgenda = document.querySelector(".container-agenda");
	let html = "";
	let i = 0;
	for (let elem of contacts.list) {
		html += `
    <div id="contact${i}" class="contact ">
        <div class="contact${i}">
            <div>${elem.nume}</div>
            <div>${elem.nrTel}</div>
        
        
        <button onclick="edit(${i})">Edit</button>
        <button onclick="del(${i})">Delete</button>
        </div>
    </div>`;
		i++;
	}

	containerAgenda.innerHTML = html;
}
updateUI();
function addContact() {
	const name = document.querySelector("[name = 'nume']");
	const nrTel = document.querySelector("[name='nrTel']");

	checkAdd(name.value, nrTel.value);

	updateUI();

	name.value = "";
	nrTel.value = "";
}
function del(idx) {
	if (confirm("Delete contact?")) {
		contacts.list.splice(idx, 1);
		updateUI();
	}
}
function checkAdd(name, nrTel) {
	const inputs = document.querySelectorAll(".container-input input");

	let arr = [...nrTel];
	let indicator = true;
	arr.forEach((el) => {
		if (isNaN(el)) {
			indicator = false;
		}
	});

	if (indicator && arr.length === 10 && name !== "") {
		contacts.list.push({ nume: name, nrTel: nrTel });

		inputs.forEach((el) => {
			el.classList.remove("error");
		});
	} else {
		inputs.forEach((el) => {
			el.classList.add("error");
		});
	}
}
function checkSave(name, nrTel, idx) {
	const inputNume = document.querySelector(`.input-nume${idx}`);
	const inputNrtel = document.querySelector(`.input-nrTel${idx}`);
	let arr = [...nrTel];
	let indicator = true;
	arr.forEach((el) => {
		if (isNaN(el)) {
			indicator = false;
		}
	});

	if (indicator && arr.length === 10 && name !== "") {
		contacts.list[idx] = { nume: name, nrTel: nrTel };
		inputNume.classList.remove("error");
		inputNrtel.classList.remove("error");
		return true;
	} else {
		inputNume.classList.add("error");
		inputNrtel.classList.add("error");
		return false;
	}
}
function edit(idx) {
	const currentContact = document.querySelector(`#contact${idx}`);
	const currentCredentials = document.querySelector(`.contact${idx}`);
	let html = `
    <input class="input-nume${idx}" type="text" value=${contacts.list[idx].nume} name="nume${idx}" />
    <br>
    <input class="input-nrTel${idx}" type="text" value=${contacts.list[idx].nrTel} name="nrTel${idx}" />
    <br>
    <button onclick="save(${idx})">Save</button>`;
	currentContact.insertAdjacentHTML("afterbegin", html);
	currentCredentials.classList.add("hidden");
	document.querySelector(`.input-nume${idx}`).focus();
}
function save(idx) {
	const name = document.querySelector(`.input-nume${idx}`).value;
	const nrTel = document.querySelector(`.input-nrTel${idx}`).value;
	if (checkSave(name, nrTel, idx)) {
		updateUI();
	}
}
