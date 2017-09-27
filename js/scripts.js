/*
 * @Author: 白若年 
 * @Date: 2017-09-27 20:54:46 
 * @Last Modified by:   白若年_aquarius 
 * @Last Modified time: 2017-09-27 20:54:46 
 */
;
(function($) {
    var con = new Swiper('.con');
    $('.header p').on('click', function() {
        var ind = $(this).index();
        $(this).addClass('bg').siblings().removeClass('bg');
        con.slideTo(ind);
        if ($(this).hasClass('bg')) {
            con.slideTo(ind);
        }
    })
})(jQuery)