'use strict';

var item = $('.product-catalog__page');
item.on('click', function () {
    item.removeClass('product-catalog__page_active');
    $(this).addClass('product-catalog__page_active');
});