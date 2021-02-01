$(document).ready(function() {
    ymaps.ready(function() {
      let geolocation = ymaps.geolocation;
      $('.topline__first__left__span-phone').empty().html('ВАШ ГОРОД: ' + geolocation.city.toUpperCase());
      if (geolocation.city != 'Москва') {
        $('.a-phone-one').empty().html('7 900 0000 777');
      }
      })
    })