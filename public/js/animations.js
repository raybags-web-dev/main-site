const animation_module = AOS.init();


// image cover funtion=======still needs work===========
function coverImage_manipulator(img) {

    $(document).ready(() => scrollSpy());
    $(window).scroll(() => scrollSpy());
}
// image cover funtion=======still needs work===========


export { animation_module, coverImage_manipulator }