"use strict";

$(document).ready(function () {
  //initialize swiper when document ready
  // eslint-disable-next-line
  var mySwiper = new Swiper('.swiper-container', {
    // Optional parameters
    direction: 'horizontal',
    loop: true,
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev'
    }
  });
});