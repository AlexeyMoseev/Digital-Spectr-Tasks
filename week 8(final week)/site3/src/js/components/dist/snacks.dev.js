'use strict';

(function () {
    var item = $('.js-snacks__snack');
    item.first().addClass('snacks__snack_active');
    item.on('click', function () {
        item.removeClass('snacks__snack_active');
        $(this).addClass('snacks__snack_active');
    });
})();