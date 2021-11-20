'use strict';

(function ($) {
  // модальное окно "Заказать звонок"
  // из шаблона
  var templateFrag = $('#callback-popup').prop('content');
  var callRequestWindow = $(templateFrag)
      .find('.callback-popup__container')
      .clone();

  // обработка нажатия на кнопку
  $('#call-request-button').on('click', function () {
    // POPUP OPEN
    $('.page__body').addClass('body-no-scroll');
    $('.page__body').append(callRequestWindow);
    var closeButton = $('.callback-popup__close-button');
    $('#popup-name').focus();

    // ввод телефона в соответствии с маской


    // закрытие по клику вне модального окна
    window.addEventListener('click', function (evt) {
      var isPathContainForm = function (x) {
        return (typeof x.className === 'string') ? x.className.includes('callback-popup__container') || x.id.includes('call-request-button') : false;
      };
      if (!evt.composedPath().some(isPathContainForm)) {
        removeModal(evt);
      }
    });

    // недоступность элементов вне модального окна
    var modalNodes = $('.callback-popup__container *').find(':focusable');
    var focusableNodes = $(':focusable');
    for (var i = 0; i < focusableNodes.length; i++) {
      var node = focusableNodes[i];
      if (!modalNodes.is(node)) {
        node._prevTabindex = node.tabIndex;
        node.tabIndex = -1;
        node.style.pointerEvents = 'none';
        node.style.outline = 'none';
      }
    }
    // закрытие модалки по нажатию на Esc клавиатуры
    var onEscRemoveModal = function (evt) {
      if (evt.key === 'Escape' || evt.key === 'Esc') {
        removeModal(evt);
      }
    };
    var removeModal = function (evt) {
      evt.preventDefault();
      callRequestWindow.remove();
      $('.page__body').removeClass('body-no-scroll');
      // RESTORE TABINDEX & POINTER-EVENTS TO AUTO
      for (i = 0; i < focusableNodes.length; i++) {
        node = focusableNodes[i];
        node.tabIndex = node._prevTabindex;
        node._prevTabindex = null;
        node.style.pointerEvents = 'auto';
        node.style.outline = null;
      }
      // REMOVE LISTENERS
      $(document).off('keydown', onEscRemoveModal);
      closeButton.off('click', removeModal);
    };
    $(document).on('keydown', onEscRemoveModal);
    closeButton.on('click', removeModal);
  });

  // Реализация аккордеона
  var maBlock = document.querySelector('.page-footer__menu-address-wrapper');
  maBlock.classList.remove('no-js');
  var menuBlock = document.querySelector('.page-footer__menu-block');
  menuBlock.classList.add('page-footer__menu-block--closed');
  var addressBlock = document.querySelector('.page-footer__address-block');
  addressBlock.classList.add('page-footer__address-block--closed');

  var footerMenuHeader = document.querySelector('.page-footer__header--menu');
  footerMenuHeader.addEventListener('click', function () {
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
  });

  var footerAddressHeader = document.querySelector('.page-footer__header--address');
  footerAddressHeader.addEventListener('click', function () {
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
  });

  // скролл при нажатии "Получить бесплатную консультацию"
  var headerButton = document.querySelector('.page-header__promo-button');
  headerButton.addEventListener('click', function () {
    window.location.href = '#form';
  });
})(jQuery);
