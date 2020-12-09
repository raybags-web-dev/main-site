const animation_module = AOS.init();


// image full page color manipulation function===========
function coverImage_manipulator(img_container, main_title) {
    $(document).ready(function() {
        $(window).scroll(function() {
            if ($(this).scrollTop() > 100) {
                $(img_container).addClass('profile_img_shadow_1 profile_img_shadow_2');
                $(img_container).removeClass('shadow_1 shadow_2');
                $(main_title).removeClass('zoomIn');
                $(main_title).addClass('zoomOut faster');

            } else {
                $(img_container).removeClass('profile_img_shadow_1 profile_img_shadow_2');
                $(img_container).addClass('shadow_1 shadow_2');
                $(main_title).addClass('zoomIn');
                $(main_title).removeClass('zoomOut faster');

            }
        });
    });
}
// On hover change profile page function



export { animation_module, coverImage_manipulator }