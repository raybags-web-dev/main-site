const animation_module = AOS.init();

// auto removal animation for profile pic
const autoRunAnimation = function(element) {
    $(document).ready(function() {
        let isPresent = $(element).attr('class').match(/home_img_top_nav_1| home_img_top_nav_2| gray_layer/);

        isPresent ? ($(element).removeClass('home_img_top_nav_1'), $(element).removeClass('gray_layer'), $(element).removeClass('home_img_top_nav_2')) :
            ($(element).addClass('home_img_top_nav_1'),
                $(element).addClass('gray_layer'),
                $(element).addClass('home_img_top_nav_2'));

    })
}

// image full page color manipulation function===========
function top_nav_bar_handle(top_nav, page_title, image_container, image_pic) {
    $(document).ready(function() {
        $(window).scroll(function() {
            if ($(this).scrollTop() > 200) {
                $(top_nav).addClass('top_body_nav');
                $(top_nav).removeClass('top_body_nav_2');

                $(page_title).addClass('home_title_top_nav slideInDown gray_layer');

                $(image_container).addClass('home_img_top_nav_1 home_img_top_nav_2');

                $(image_pic).addClass('prof_pho__top_nav slideInDown');

            } else {
                $(top_nav).addClass('top_body_nav_2');
                $(top_nav).removeClass('top_body_nav');

                $(page_title).removeClass('home_title_top_nav slideInDown gray_layer');

                $(image_container).removeClass('home_img_top_nav_1 home_img_top_nav_2');

                $(image_pic).removeClass('prof_pho__top_nav slideInDown');

            }
        });
    });
}

export { animation_module, top_nav_bar_handle, autoRunAnimation }