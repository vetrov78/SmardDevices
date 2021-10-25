'use strict';
var callFormTemplate = document.querySelector('#call-form')
    .content
    .querySelector('.call-form__container');

var callRequestButton = document.querySelector('#call-request-button');
var windowExistFlag = false;
//модальное окно "Заказать звонок"
callRequestButton.addEventListener('click', function () {
  if (!windowExistFlag) {
    var callRequestWindow = callFormTemplate.cloneNode(true);
    document.body.appendChild(callRequestWindow);
    var closeIcon = document.querySelector('.call-form__close-icon');
    windowExistFlag = true;
  }
  //закрытие окна
  const removeModal = function(evt) {
    evt.preventDefault();
    callRequestWindow.remove();
    document.removeEventListener('keydown', onEscRemoveModal);
    windowExistFlag = false;
  }
  const isEscEvent = function(evt) {
    return (evt.key === 'Escape' || evt.key === 'Esc');
  }
  const onEscRemoveModal = function(evt) {
    if (isEscEvent(evt)) removeModal(evt);
  };
  document.addEventListener('keydown', onEscRemoveModal);
  closeIcon.addEventListener('click', removeModal);

});

//Реализация аккордеона
var maBlock = document.querySelector('.page-footer__menu-address-wrapper');
maBlock.classList.remove('no-js');
var menuBlock = document.querySelector('.page-footer__menu-block');
menuBlock.classList.add('page-footer__menu-block--closed');
var addressBlock = document.querySelector('.page-footer__address-block');
addressBlock.classList.add('page-footer__address-block--closed');

var menuToggle = document.querySelector('.page-footer__menu-toggle');
menuToggle.addEventListener('click', function () {
  if (menuBlock.classList.contains('page-footer__menu-block--closed')) {
    menuBlock.classList.remove('page-footer__menu-block--closed');
    menuBlock.classList.add('page-footer__menu-block--opened');
    if (addressBlock.classList.contains('page-footer__address-block--opened')) {
      addressBlock.classList.add('page-footer__address-block--closed');
      addressBlock.classList.remove('page-footer__address-block--opened');
    }
  } else {
    menuBlock.classList.add('page-footer__menu-block--closed');
    menuBlock.classList.remove('page-footer__menu-block--opened');
  }
})

var addressToggle = document.querySelector('.page-footer__address-toggle');
addressToggle.addEventListener('click', function () {
  if (addressBlock.classList.contains('page-footer__address-block--closed')) {
    addressBlock.classList.remove('page-footer__address-block--closed');
    addressBlock.classList.add('page-footer__address-block--opened');
    if (menuBlock.classList.contains('page-footer__menu-block--opened')) {
      menuBlock.classList.add('page-footer__menu-block--closed');
      menuBlock.classList.remove('page-footer__menu-block--opened');
    }
  } else {
    addressBlock.classList.add('page-footer__address-block--closed');
    addressBlock.classList.remove('page-footer__address-block--opened');
  }
})
