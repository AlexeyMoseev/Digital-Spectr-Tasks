$(document).ready(function() {
    ymaps.ready(function() {
      let geolocation = ymaps.geolocation;
      $('.city').empty().html('ВАШ ГОРОД: ' + geolocation.city.toUpperCase());
      if (geolocation.city != 'Москва') {
        $('.phone').empty().html('7 900 0000 777');
      }
      })
    })