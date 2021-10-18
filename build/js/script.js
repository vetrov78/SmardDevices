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


// var headerToggle = document.querySelector('.page-header__navigation-toggle');

// pageHeader.classList.remove('page-header--nojs');

// headerToggle.addEventListener('click', function () {
//   if (pageHeader.classList.contains('page-header__navigation--closed')) {
//     pageHeader.classList.remove('page-header__navigation--closed');
//     pageHeader.classList.add('page-header__navigation--opened');
//   } else {
//     pageHeader.classList.add('page-header__navigation--closed');
//     pageHeader.classList.remove('page-header__navigation--opened');
//   }
// });
