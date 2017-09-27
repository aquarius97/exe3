;
(function($) {
    $('.header p').on('click', function() {
        $(this).addClass('bg').siblings().removeClass('bg');
    })
})(jQuery)