$(function () {
    $('.header__nav-item-submenu-content').hide();
    $('.header__nav-item-submenu-content-1-item-drop-content').hide();

    $('.header__nav-item-submenu').hover(
        function () {
            $('.header__nav-item-submenu-content').slideDown();
        },
        function () {
            $('.header__nav-item-submenu-content').slideUp('fast');
        }
    );

    $('.header__nav-item-submenu-content-1-item-drop').hover(
        function () {
            $('.header__nav-item-submenu-content-1-item-drop-content').slideDown();
        },
        function () {
            $('.header__nav-item-submenu-content-1-item-drop-content').slideUp(
                'fast'
            );
        }
    );

    let item = $('.header__nav-item-submenu-content-1-item');

    item.on('click', function () {
        item.removeClass('header__nav-item-submenu-content-1-item_active');
        $(this).addClass('header__nav-item-submenu-content-1-item_active');
    });

    let item2 = $('.header__nav-item-submenu-content-1-item-drop-content-item');

    item2.on('click', function () {
        item2.removeClass('header__nav-item-submenu-content-1-item-drop-content-item_active');
        $(this).addClass('header__nav-item-submenu-content-1-item-drop-content-item_active');
    });
});
