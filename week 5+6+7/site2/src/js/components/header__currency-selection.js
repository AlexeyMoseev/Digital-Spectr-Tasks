let res = $('.header__currency-selection-submenu');
$('.header__currency-selection').on('click', floating);
$('.header__currency-selection-submenu_item1').on('click', function(){
    $('.header__currency-selection-menu').empty().html('USD');
});
$('.header__currency-selection-submenu_item2').on('click', function(){
    $('.header__currency-selection-menu').empty().html('EUR');
});
$('.header__currency-selection-submenu_item3').on('click', function(){
    $('.header__currency-selection-menu').empty().html('EN');
});
$('.header__currency-selection-submenu_item4').on('click', function(){
    $('.header__currency-selection-menu').empty().html('CH');
});

$(document).click(function (e) {
    if (
        $(e.target).closest(res).length ||
    $(e.target).closest('.header__currency-selection').length
    )
        return;
    res.fadeOut(100);
    e.stopPropagation();
});

function floating() {
    if (res.css('display') == 'none') {
        res.fadeIn(100);
    } else {
        res.fadeOut(100);
    }
}