"use strict";

var cardToggler = function cardToggler() {
  console.log("card toggler");
  Array.from(document.querySelectorAll(".card-rotate__wrapper")).forEach(function (cardWrapper) {
    cardWrapper.addEventListener("click", function () {
      cardWrapper.classList.toggle("card-rotate__wrapper--back-shown");
    });
    Array.from(cardWrapper.querySelectorAll(".card")).forEach(function (card) {
      card.style.height = "".concat(Array.from(card.children).map(function (c) {
        return c.offsetHeight;
      }).reduce(function (a, b) {
        return a + b;
      }), "px");
    });
  });
};

document.addEventListener("DOMContentLoaded", function () {
  cardToggler();
});