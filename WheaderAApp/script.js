"use strict";
let urlWeather =
	"https://api.openweathermap.org/data/2.5/weather?appid=69518b1f8f16c35f8705550dc4161056&units=metric&q=";
let urlForecast =
	"https://api.openweathermap.org/data/2.5/forecast?appid=69518b1f8f16c35f8705550dc4161056&units=metric&q=";
let urlIcon = "http://openweathermap.org/img/w/";
let currentCityName = "Paris";
let weatherData = {};
let weatherForecast = {};
let prognozaZile = [
	[
		// {
		//     icon:"icon",
		//     ora='ora',
		//     temeratura:"temperatura",
		//     descriere:"descriere"
		// }
	],
	[],
	[],
	[],
	[],
];
let icon;
let iconsForecast = [];
function getCurrentCity() {
	currentCityName = document.querySelector("input[name='inputCity']").value;
}
function addError() {
	const input = document.querySelector("input[name='inputCity']");
	input.classList.add("error");
}
function removeError() {
	const input = document.querySelector("input[name='inputCity']");
	input.classList.remove("error");
}
async function getDataVreme() {
	removeError();
	let r = await fetch(urlWeather + currentCityName);
	if (!r.ok) {
		addError();
		const message = `An error has ocurred with weather data  ${r.status}`;
		throw new Error(message);
	}
	weatherData = await r.json();
	console.log(weatherData);
	let info = document.querySelector(".info");
	if (info) {
		info.remove();
	}
	icon = await fetch(urlIcon + weatherData.weather[0].icon + ".png");
}
async function getDataForecast() {
	removeError();
	let r2 = await fetch(urlForecast + currentCityName);
	if (!r2.ok) {
		addError();
		const message = `An error has ocurred with forecast data ${r2.status}`;
		throw new Error(message);
	}
	weatherForecast = await r2.json();

	console.log(weatherForecast);
	for (let elem of weatherForecast.list) {
		let rIcon = await fetch(urlIcon + elem.weather[0].icon + ".png");
		elem.weather[0].icon = rIcon.url;
	}

	prognozaZile = [[], [], [], [], []];
	procesarePrognoza();
	let h3 = document.querySelectorAll("h3");
	let ora = document.querySelectorAll(".ora");

	for (let item of h3) {
		if (item) {
			item.remove();
		}
	}
	for (let item of ora) {
		if (item) {
			item.remove();
		}
	}
}

async function drawVreme() {
	getCurrentCity();
	await getDataVreme();
	const divVreme = document.querySelector(".vremea-acum");
	divVreme.classList.remove("hidden");
	let container = document.querySelector(".vremea-acum-info");
	let html = `
	<div class="info">
	<img src=${icon.url} alt="" class="vremea-acum-info-img" />
    <div>Descriere: ${weatherData.weather[0].description}</div>
    <div>Umiditate: ${weatherData.main.humidity}</div>
    <div>Presiune: ${weatherData.main.pressure}</div>
    <div>Temperatura Curenta: ${weatherData.main.temp}</div>
    <div>Minima zilei: ${weatherData.main.temp_min}</div>
    <div>Maxima zilei: ${weatherData.main.temp_max}</div>
	</div>
    `;
	container.insertAdjacentHTML("afterbegin", html);
}
function procesarePrognoza() {
	let date = new Date().getDate();
	let y = 0;
	for (let i = 0; i < prognozaZile.length; i++) {
		for (let elem of weatherForecast.list) {
			if (elem.dt_txt.slice(8, 10) === String(date)) {
				prognozaZile[i].push({
					zi: `${elem.dt_txt.slice(8, 10)}/${elem.dt_txt.slice(
						5,
						7
					)}/${elem.dt_txt.slice(0, 4)}`,
					icon: elem.weather[0].icon,
					ora: elem.dt_txt.slice(11, 16),
					temperatura: elem.main.temp,
					descriere: elem.weather[0].description,
				});
			}
		}
		date++;
	}
}

async function drawPrognoza() {
	getCurrentCity();
	await getDataForecast();
	const divPrognoza = document.querySelector(".prognoza");
	divPrognoza.classList.remove("hidden");
	for (let i = 0; i < prognozaZile.length; i++) {
		let str = "";
		const zi = document.querySelector(`.zi${i}`);
		let html = `
        <h3>${prognozaZile[i][0].zi}</h3> 
        `;
		zi.insertAdjacentHTML("afterbegin", html);
		for (let elem of prognozaZile[i]) {
			str += `
						 <div class="ora">
						 <img src="${elem.icon}" alt="">
							<div>${elem.ora}</div>
							<div>${elem.temperatura}°C</div>
							<div>${elem.descriere}</div>
						</div>
            `;
		}
		zi.insertAdjacentHTML("beforeend", str);
	}
}
