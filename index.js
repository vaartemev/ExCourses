const btn = document.querySelector('button');
const input = document.querySelector('input');
const translateBtn = document.querySelector('#button-addon2');
const translatedWord = document.querySelector('.translated');
const badge = document.querySelector('.badge');
const ul = document.querySelector('.list-group');

const strangeWord = 'საავადმყოფო';

const apiKey = 'trnsl.1.1.20200226T124851Z.f10d3b48758d51c8.225e3497cdae178cf19deac107fcff64da772eb2';
const urlForGetLangs = 'https://translate.yandex.net/api/v1.5/tr.json/getLangs';
const urlForDetectLang = 'https://translate.yandex.net/api/v1.5/tr.json/detect';
const urlForTranslateLang = 'https://translate.yandex.net/api/v1.5/tr.json/translate';

const request = new XMLHttpRequest();

btn.addEventListener('click', getAllLangs);
translateBtn.addEventListener('click', () => {
	detectLang();
	translateWord();
});

function renderListWithLangs(langs){
	langs.map((lang) => {
		var li = document.createElement('li');
		li.classList.add('list-group-item')
		li.innerHTML = lang;
		ul.appendChild(li);
	});
}

function getAllLangs() {
	request.open('GET', `${urlForGetLangs}?key=${apiKey}&ui=ru`);
	request.send();
	request.onload = function() {
		var data = JSON.parse(request.response);
		var langs = Object.values(data.langs);
		renderListWithLangs(langs);
	}	
}

function detectLang() {
	const text = input.value;
	let lang;

	fetch(`${urlForDetectLang}?key=${apiKey}&text=${text}`)
		.then(res => res.json())
		.then(data => {
			fetch(`${urlForGetLangs}?key=${apiKey}&ui=ru`)
				.then(res => res.json())
				.then(({langs}) => {
					lang = langs[data.lang];
					badge.innerHTML = lang;
				});
		});	
}

async function translateWord() {
	const text = input.value;

	const response = await fetch(`${urlForTranslateLang}?key=${apiKey}&text=${text}&lang=ru`);
	const data = await response.json();
	translatedWord.innerHTML = data.text;
}

async function translateStrgangeWord() {
	const responseFromChina = await fetch(`${urlForTranslateLang}?key=${apiKey}&text=${strangeWord}&lang=zh`);
	const dataFromChina = await responseFromChina.json();
	const chinaWord = dataFromChina.text;

	const responseFromRussia = await fetch(`${urlForTranslateLang}?key=${apiKey}&text=${chinaWord}&lang=ru`);
	const dataFromRussia = await responseFromRussia.json();
	console.log(dataFromRussia.text);
}

translateStrgangeWord();