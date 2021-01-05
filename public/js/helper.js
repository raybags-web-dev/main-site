import { cookie_accept_bunner, cookie_btn } from './main.js';
// cookie accepetd handler
function cookie_accepted() {
    window.addEventListener("cookieAlertAccept", function() {
        console.log('cookies accepted')

        $(cookie_accept_bunner).addClass('slideInDown');
        $(cookie_accept_bunner).removeClass('hide');
        $(document).ready(function() {
            $(cookie_btn).click(function() {
                $(cookie_accept_bunner).addClass('fadeOutLeft');
                $(cookie_accept_bunner).removeClass('slideInDown');
                $(cookie_accept_bunner).addClass('hide');
            })
        })
    })
}
export { cookie_accepted }