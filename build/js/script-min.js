"use strict";!function(e){var o=e("#callback-popup").prop("content"),s=e(o).find(".callback-popup__container").clone();e("#call-request-button").on("click",function(){e(".page__body").addClass("body-no-scroll"),e(".page__body").append(s);var o=e(".callback-popup__close-button");e("#popup-name").focus(),e("#popup-phone").mask("+7(999)9999999"),window.addEventListener("click",function(e){e.composedPath().some(function(e){return"string"==typeof e.className&&(e.className.includes("callback-popup__container")||e.id.includes("call-request-button"))})||d(e)});for(var a=e(".callback-popup__container *").find(":focusable"),c=e(":focusable"),n=0;n<c.length;n++){var t=c[n];a.is(t)||(t._prevTabindex=t.tabIndex,t.tabIndex=-1,t.style.pointerEvents="none",t.style.outline="none")}var l=function(e){"Escape"!==e.key&&"Esc"!==e.key||d(e)},d=function(a){for(a.preventDefault(),s.remove(),e(".page__body").removeClass("body-no-scroll"),n=0;n<c.length;n++)(t=c[n]).tabIndex=t._prevTabindex,t._prevTabindex=null,t.style.pointerEvents="auto",t.style.outline=null;e(document).off("keydown",l),o.off("click",d)};e(document).on("keydown",l),o.on("click",d)}),e("#phone").mask("+7(999)9999999"),document.querySelector(".page-footer__menu-address-wrapper").classList.remove("no-js");var a=document.querySelector(".page-footer__menu-block");a.classList.add("page-footer__menu-block--closed");var c=document.querySelector(".page-footer__address-block");c.classList.add("page-footer__address-block--closed"),document.querySelector(".page-footer__header--menu").addEventListener("click",function(){a.classList.contains("page-footer__menu-block--closed")?(a.classList.remove("page-footer__menu-block--closed"),a.classList.add("page-footer__menu-block--opened"),c.classList.contains("page-footer__address-block--opened")&&(c.classList.add("page-footer__address-block--closed"),c.classList.remove("page-footer__address-block--opened"))):(a.classList.add("page-footer__menu-block--closed"),a.classList.remove("page-footer__menu-block--opened"))}),document.querySelector(".page-footer__header--address").addEventListener("click",function(){c.classList.contains("page-footer__address-block--closed")?(c.classList.remove("page-footer__address-block--closed"),c.classList.add("page-footer__address-block--opened"),a.classList.contains("page-footer__menu-block--opened")&&(a.classList.add("page-footer__menu-block--closed"),a.classList.remove("page-footer__menu-block--opened"))):(c.classList.add("page-footer__address-block--closed"),c.classList.remove("page-footer__address-block--opened"))}),document.querySelector(".page-header__promo-button").addEventListener("click",function(){window.location.href="#form"})}(jQuery);