//меню burger
const menuBurger = document.querySelector('.header__burger');
const menuMain = document.querySelector('.header__menu');
const menuLang = document.querySelector('.header-top-lang__item');
const menuLink = document.querySelectorAll('.header-bottom__link');
const bodyElem = document.querySelector('body');

let menuLangCopy = menuLang.cloneNode(true);
menuMain.prepend(menuLangCopy);
let menuLinkCopy;
for (let item of menuLink) {
	menuLinkCopy = item.cloneNode(true);
	menuMain.append(menuLinkCopy);
}

menuBurger.addEventListener("click", menu);

function menu(event) {
	if (event.target.closest('.header__burger')) {
		menuBurger.classList.toggle('active');
		menuMain.classList.toggle('active');
		bodyElem.classList.toggle('lock');
	}
}

//карта Google maps
google.maps.event.addDomListener(window, 'load', init);

function init() {
	let mapOptions = {
		zoom: 10,
		center: new google.maps.LatLng(50.8485289, 32.3719581, 1140),
		styles: [{ "featureType": "all", "elementType": "labels.text", "stylers": [{ "color": "#878787" }] }, { "featureType": "all", "elementType": "labels.text.stroke", "stylers": [{ "visibility": "off" }] }, { "featureType": "landscape", "elementType": "all", "stylers": [{ "color": "#f9f5ed" }] }, { "featureType": "road.highway", "elementType": "all", "stylers": [{ "color": "#f5f5f5" }] }, { "featureType": "road.highway", "elementType": "geometry.stroke", "stylers": [{ "color": "#c9c9c9" }] }, { "featureType": "water", "elementType": "all", "stylers": [{ "color": "#aee0f4" }] }]
	};
	let mapElement = document.querySelector('.contacts-bottom__maps');

	let map = new google.maps.Map(mapElement, mapOptions);

	let marker = new google.maps.Marker({
		position: new google.maps.LatLng(50.847295, 32.370688),
		map: map,
		title: 'Snazzy!'
	});
}

//счетчик символов textarea
let textareaElem = document.querySelector('.checker');
let maxLenght = textareaElem.getAttribute('maxlength');
let textareaSpan = document.querySelector('.textarea__counter span');
textareaSpan.innerHTML = maxLenght;

textareaElem.addEventListener('keyup', txtSetCounter);
textareaElem.addEventListener('keydown', txtSetCounterRepeat);

function txtSetCounter() {
	let counterResult = maxLenght - textareaElem.value.length;
	textareaSpan.innerHTML = counterResult;
}

function txtSetCounterRepeat(event) {
	if (event.repeat) {
		txtSetCounter();
	}
}

// Убрать/добавить placeholder при focus/blur (поле Имя)
let name = document.querySelector('.input-name');
let placeholderName = name.placeholder;
name.addEventListener('focus', focusPlaceholderName);
name.addEventListener('blur', blurPlaceholderName);
function focusPlaceholderName(event) {
	name.placeholder = '';
}
function blurPlaceholderName(event) {
	name.placeholder = placeholderName;
}

// Убрать/добавить placeholder при focus/blur (поле Email)
let email = document.querySelector('.inputEmail');
let placeholderEmail = email.placeholder;
email.addEventListener('focus', focusPlaceholderEmail);
email.addEventListener('blur', blurPlaceholderEmail);

function focusPlaceholderEmail(event) {
	email.placeholder = '';
}
function blurPlaceholderEmail(event) {
	email.placeholder = placeholderEmail;
}

// Убрать/добавить placeholder при focus/blur (поле сообщение)
let message = document.querySelector('.checker');
let placeholderMessage = message.placeholder;
message.addEventListener('focus', focusPlaceholderMessage);
message.addEventListener('blur', blurPlaceholderMessage);

function focusPlaceholderMessage(event) {
	message.placeholder = '';
}
function blurPlaceholderMessage(event) {
	message.placeholder = placeholderMessage;
}

//Валидация формы
let mainForm = document.querySelector('.form-main');
mainForm.addEventListener('submit', validation);

function validation(event) {
	if (!name.value) {
		name.style.border = "2px solid #FF0000";
		event.preventDefault();
	}
	if (!email.value) {
		email.style.border = "2px solid #FF0000";
		event.preventDefault();
	}
}



