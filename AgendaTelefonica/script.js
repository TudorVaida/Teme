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

	contacts.list.push({ nume: name.value, nrTel: nrTel.value });

	updateUI();
	// name.value = "";
	// nrTel.value = "";
}
function del(idx) {
	if (confirm("Delete contact?")) {
		contacts.list.splice(idx, 1);
		updateUI();
	}
}
function edit(idx) {
	const elem = contacts.list[idx];
	const currentContact = document.querySelector(`#contact${idx}`);
	const currentCredentials = document.querySelector(`.contact${idx}`);
	let html = `
    <input class="input-nume${idx}" type="text" value=${contacts.list[idx].nume} name="nume${idx}" /><br>
    <input class="input-nrTel${idx}" type="text" value=${contacts.list[idx].nrTel} name="nrTel${idx}" /><br>
    <button onclick="save(${idx})">Save</button>`;
	currentContact.insertAdjacentHTML("afterbegin", html);
	currentCredentials.classList.add("hidden");
	document.querySelector(`.input-nume${idx}`).focus();
}
function save(idx) {
	const name = document.querySelector(`.input-nume${idx}`).value;
	const nrTel = document.querySelector(`.input-nrTel${idx}`).value;
	contacts.list[idx] = { nume: name, nrTel: nrTel };
	updateUI();
}
