'use strict';

(function () {
    var item = $('.js-nav__link');
    item.on('click', function () {
        item.removeClass('nav__link_active');
        $(this).addClass('nav__link_active');
    });
})();