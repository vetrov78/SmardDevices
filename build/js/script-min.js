"use strict";!function(){var e=document.querySelector("#callback-popup").content.querySelector(".callback-popup__container"),o=document.querySelector("#call-request-button"),t=!1;o.addEventListener("click",function(){if(!t){var o=e.cloneNode(!0);document.body.appendChild(o),n(o.querySelector("[data-mask]"));var c=document.querySelector(".callback-popup__close-button");t=!0,window.addEventListener("click",function(e){e.path.some(function(e){return"string"==typeof e.className&&(e.className.includes("callback-popup__container")||e.id.includes("call-request-button"))})||a(e)})}var s=function(e){(function(e){return"Escape"===e.key||"Esc"===e.key})(e)&&a(e)},a=function(e){e.preventDefault(),o.remove(),document.removeEventListener("keydown",s),c.removeEventListener("click",a),t=!1};document.addEventListener("keydown",s),c.addEventListener("click",a)}),document.querySelector(".page-footer__menu-address-wrapper").classList.remove("no-js");var c=document.querySelector(".page-footer__menu-block");c.classList.add("page-footer__menu-block--closed");var s=document.querySelector(".page-footer__address-block");function n(e){var o=e.dataset.mask.split("");function t(e){return function(e){var t=e.length<3;return o.map(function(o){if(t){if("_"!==o&&")"!==o)return o}else if("_"!==o)return o;return 0===e.length?"":e.shift()}).join("")}(e.split("").filter(function(e){return/\d/.test(e)}))}function c(){var o=e.selectionStart,c=e.selectionEnd;e.value=t(e.value.replace(/7/,"")),e.selectionStart=o,e.selectionEnd=c}e.addEventListener("click",c),e.addEventListener("keyup",c)}s.classList.add("page-footer__address-block--closed"),document.querySelector(".page-footer__header--menu").addEventListener("click",function(){c.classList.contains("page-footer__menu-block--closed")?(c.classList.remove("page-footer__menu-block--closed"),c.classList.add("page-footer__menu-block--opened"),s.classList.contains("page-footer__address-block--opened")&&(s.classList.add("page-footer__address-block--closed"),s.classList.remove("page-footer__address-block--opened"))):(c.classList.add("page-footer__menu-block--closed"),c.classList.remove("page-footer__menu-block--opened"))}),document.querySelector(".page-footer__header--address").addEventListener("click",function(){s.classList.contains("page-footer__address-block--closed")?(s.classList.remove("page-footer__address-block--closed"),s.classList.add("page-footer__address-block--opened"),c.classList.contains("page-footer__menu-block--opened")&&(c.classList.add("page-footer__menu-block--closed"),c.classList.remove("page-footer__menu-block--opened"))):(s.classList.add("page-footer__address-block--closed"),s.classList.remove("page-footer__address-block--opened"))}),Array.prototype.forEach.call(document.querySelectorAll("[data-mask]"),n),document.querySelector(".page-header__promo-button").addEventListener("click",function(){window.location.href="#form"})}();