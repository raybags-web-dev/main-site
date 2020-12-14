'use strict';
//Menu show hidden
import { animation_module, top_nav_bar_handle, autoRunAnimation } from './animations.js';
import { cookie_accepted } from './helper.js';

const navMenu = document.getElementById('nav-menu');
const toggleMenu = document.getElementById('nav-toggle');
const closeMenu = document.getElementById('nav-close');
const closeButton = document.querySelector('#nav-close .fas');
const spinnerIcon = document.getElementById('spinner');
const links_items = document.querySelectorAll('.nav_list li');
const top_button = document.getElementById('scroll_top_btn');

const cookie_accept_bunner = document.querySelector('.alert_box_accepted');
const cookie_btn = document.querySelector('.closebtn')

const top_nav = document.querySelector('#main_p_nav');
const page_title = document.querySelector('.home_title');

const profBox = document.querySelector('.home_img');
const profPic = document.querySelector('.prof_pho');

export { cookie_accept_bunner, cookie_btn };

// cookie accepeted handler
cookie_accepted();
// onscroll image animation handler
(function() {
    $(document).ready(function() {
        $(window).scroll(function() {
            let windowHeight = $(this).scrollTop() < 100
            let interval_instance1;
            let interval_instance2;

            let interval = function() {
                if (windowHeight) {
                    clearInterval(interval_instance2)
                    interval_instance1 = setInterval(autoRunAnimation(profBox), 1000)
                }
                clearInterval(interval_instance1)
                interval_instance2 = setInterval(autoRunAnimation(profBox), 1000)
            };
            interval();
        })
    })
}());


// top navbar handler
top_nav_bar_handle(top_nav, page_title, profBox, profPic);
// animation module
animation_module;
// Show
toggleMenu.addEventListener('click', () => {
    navMenu.classList.toggle('show');

    links_items.forEach(a => {
        a.classList.remove('fadeInLeft');
        a.classList.add('fadeInUpBig');
        a.style.cssText = "display: flex; padding-top: 1.8rem; letter-spacing: 1px; text-shadow: 1px -2px 1px rgb(0,0,0,.4); transition: .8s; color: #FFFFFF; display: block; width: 100%; margin-top: 3rem; display: flex; justify-content: space-around;";
        setTimeout(() => {
            a.classList.contains('fadeInUpBig') ? a.classList.remove('fadeInUpBig') : 0
        }, 1000)
    });
    closeButton.style.cssText = '';
});

// spinner show on load
$(window).on('load', () => {
        $(spinnerIcon).fadeOut("slow");;
        console.log('All resources loaded successfully');
    })
    // Hide
closeMenu.addEventListener('click', () => {
        navMenu.classList.remove('show');
        links_items.forEach(a => {
            a.classList.add('slideOutRight');
            (a.classList.contains('slideOutRight')) ? a.classList.remove('slideOutRight'): 0

            a.style.cssText = ""
        });
        closeButton.style.cssText = 'color: red;'
    })
    // remove menu
const navLink = document.querySelectorAll('.nav_link');

// helper function to remove menu
function linkAction() {
    navMenu.classList.remove('show');
}
// handle clicks on links
navLink.forEach(n => n.addEventListener('click', linkAction));


// =========Hide top button onloade==========
const hide_top_button = function() {
    return $(document).ready(function() {
        $(top_button).hide();
    });
}
hide_top_button();
// ===========scroll top button functionality===========
$(document).ready(function() {
    $(window).scroll(function() {
        if ($(this).scrollTop() > 1200) {
            $(top_button).addClass('slideInRight')
            $(top_button).fadeIn();
        } else {
            $(top_button).slideUp();
        }
    });
    $(top_button).click(function() {
        $(top_button).addClass('slideOutRight')
        $("html, body").animate({ scrollTop: 0 }, 700);
        setTimeout(function() {
            $(top_button).removeClass('slideOutRight')
        }, 1500)
        return false;
    });
});

//=====scrollSpy function============
function scrollSpy() {
    let sections = ['home', 'about', 'skills', 'services', 'works', 'contact'];
    let current;

    for (let i = 0; i < sections.length; i++) {
        if ($('#' + sections[i]).offset().top <= $(window).scrollTop()) {
            current = sections[i];
        }
    }
    $(".nav_list a[href='#" + current + "']").addClass('active');
    $(".nav_list a").not("a[href='#" + current + "']").removeClass('active');
}
// smooth scrolling navigation
$(".nav_list a").click(function() {
    let target = $(this).attr("href");
    $("body, html").animate({
        scrollTop: $(target).offset().top
    }, 300);
    return false;
});

//scrollSpy call
$(document).ready(function() {
    scrollSpy();
});

$(window).scroll(function() {
    scrollSpy();
});