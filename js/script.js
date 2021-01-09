// Header fixed

let header = document.querySelector('.header');
let headerMenuItem = document.querySelectorAll('.menu__item');
let headerPhonePic = document.querySelector('.phone__pic');
let headerPhoneNumbers = document.querySelector('.phone__numbers');
let headerLogo = document.querySelector('.header__logo');

if (document.documentElement.clientWidth > 375) {
window.onscroll = function showHeader() {
	if (window.pageYOffset > 110) {
		header.classList.add('header--fixed');
		headerLogo.classList.add('header__logo--fixed');

		for (var i = 0; i < headerMenuItem.length; i++) {
			headerMenuItem[i].classList.add('menu__item--fixed');
		}

		headerPhonePic.classList.add('phone__pic--fixed');
		headerPhoneNumbers.classList.add('phone__numbers--fixed');
	} else {
		header.classList.remove('header--fixed');
		headerLogo.classList.remove('header__logo--fixed');

		for (var i = 0; i < headerMenuItem.length; i++) {
			headerMenuItem[i].classList.remove('menu__item--fixed');
		}

		headerPhonePic.classList.remove('phone__pic--fixed');
		headerPhoneNumbers.classList.remove('phone__numbers--fixed');
	}
}
}

// Hamburger

let hamburger = document.querySelector('.hamburger');
let headerMenu = document.querySelector('.header__menu');
let headerPhone = document.querySelector('.header__phone');

hamburger.onclick = function () {
	hamburger.classList.toggle('is-active');
	headerMenu.classList.toggle('header__menu--active');
	headerPhone.classList.toggle('header__phone--active');
}

// Header change colors

let services = document.querySelector('.services');
let nameGroup = document.querySelector('.name-group');
let buttonText = document.querySelector('.services__button-text');
let arrow = document.querySelector('.services__button-arrow');
let servicesButton = document.querySelector('.services__button');

let servicesPic1 = document.querySelector('.services-pic-1');
let servicesPic2 = document.querySelector('.services-pic-2');
let servicesPic3 = document.querySelector('.services-pic-3');
let servicesPic4 = document.querySelector('.services-pic-4');
let servicesPic5 = document.querySelector('.services-pic-5');
let servicesPic6 = document.querySelector('.services-pic-6');

let servicesItem1 = document.querySelector('.services__item-1');
let servicesItem2 = document.querySelector('.services__item-2');
let servicesItem3 = document.querySelector('.services__item-3');

	servicesItem1.onclick = function () {
		servicesItem2.classList.remove('active');
		servicesItem3.classList.remove('active');
		servicesPic1.classList.remove('active');
		servicesPic2.classList.remove('active');
		servicesPic4.classList.remove('active');
		servicesPic5.classList.remove('active');
	
		servicesItem1.classList.add('active');
		servicesPic3.classList.add('active');
		servicesPic6.classList.add('active');
	
		header.classList.remove('active--2');
		header.classList.remove('active--3');
		header.classList.add('active--1');
	
		services.classList.remove('active--2');
		services.classList.remove('active--3');
		services.classList.add('active--1');
	
		nameGroup.classList.remove('active--2');
		nameGroup.classList.remove('active--3');
		nameGroup.classList.add('active--1');
	
		buttonText.classList.remove('active--2');
		buttonText.classList.remove('active--3');
		buttonText.classList.add('active--1');
	
		arrow.classList.remove('active--2');
		arrow.classList.remove('active--3');
		arrow.classList.add('active--1');
	
		servicesButton.classList.remove('active--2');
		servicesButton.classList.remove('active--3');
		servicesButton.classList.add('active--1');
	};
	
	servicesItem2.onclick = function () {
		servicesItem1.classList.remove('active');
		servicesItem3.classList.remove('active');
		servicesPic1.classList.remove('active');
		servicesPic2.classList.remove('active');
		servicesPic3.classList.remove('active');
		servicesPic6.classList.remove('active');
	
		servicesItem2.classList.add('active');
		servicesPic4.classList.add('active');
		servicesPic5.classList.add('active');
	
		header.classList.remove('active--1');
		header.classList.remove('active--3');
		header.classList.add('active--2');
	
		services.classList.remove('active--1');
		services.classList.remove('active--3');
		services.classList.add('active--2');
	
		nameGroup.classList.remove('active--1');
		nameGroup.classList.remove('active--3');
		nameGroup.classList.add('active--2');
	
		buttonText.classList.remove('active--1');
		buttonText.classList.remove('active--3');
		buttonText.classList.add('active--2');
	
		arrow.classList.remove('active--1');
		arrow.classList.remove('active--3');
		arrow.classList.add('active--2');
	
		servicesButton.classList.remove('active--1');
		servicesButton.classList.remove('active--3');
		servicesButton.classList.add('active--2');
	};
	
	servicesItem3.onclick = function () {
		servicesItem1.classList.remove('active');
		servicesItem2.classList.remove('active');
		servicesPic3.classList.remove('active');
		servicesPic4.classList.remove('active');
		servicesPic5.classList.remove('active');
		servicesPic6.classList.remove('active');
	
		servicesItem3.classList.add('active');
		servicesPic1.classList.add('active');
		servicesPic2.classList.add('active');
	
		header.classList.remove('active--1');
		header.classList.remove('active--2');
		header.classList.add('active--3');
	
		services.classList.remove('active--1');
		services.classList.remove('active--2');
		services.classList.add('active--3');
	
		nameGroup.classList.remove('active--1');
		nameGroup.classList.remove('active--2');
		nameGroup.classList.add('active--3');
	
		buttonText.classList.remove('active--1');
		buttonText.classList.remove('active--2');
		buttonText.classList.add('active--3');
	
		arrow.classList.remove('active--1');
		arrow.classList.remove('active--2');
		arrow.classList.add('active--3');
	
		servicesButton.classList.remove('active--1');
		servicesButton.classList.remove('active--2');
		servicesButton.classList.add('active--3');
	};

// Slick-slider

$(document).ready(function(){
  $('.production__directions--mobile').slick({
		arrows: false,
		slidesToShow: 1,
  	slidesToScroll: 1,
  	autoplay: true,
  	autoplaySpeed: 3000
  });
});