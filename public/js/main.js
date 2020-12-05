'use strict';
//Menu show hidden
import { animation_module } from './animations.js';

const navMenu = document.getElementById('nav-menu');
const toggleMenu = document.getElementById('nav-toggle');
const closeMenu = document.getElementById('nav-close');
const closeButton = document.querySelector('#nav-close .fas');
const spinnerIcon = document.getElementById('spinner');
const cards = document.querySelectorAll('#cards_services');
const links = document.querySelectorAll('.nav_list');
const links_items = document.querySelectorAll('.nav_list li');

const top_button = document.getElementById('scroll_top_btn');


// card animation
flipCard();
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

// flip cards funtion
function flipCard() {
    cards.forEach(card => {
        $(card).hover(() => {
            $(card).addClass('animated pulse');
        }, () => {
            $(card).removeClass('animated pulse');
        });
    })
};
// handle clicks on links
navLink.forEach(n => n.addEventListener('click', linkAction));

// ===========scroll top button functionality===========
$(document).ready(function() {
    $(window).scroll(function() {
        if ($(this).scrollTop() > 1200) {
            $(top_button).addClass('slideInRight')
            $(top_button).fadeIn();
        } else {
            $(top_button).fadeOut();
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
// ===========scroll top button functionality===========

// scrollSpy
// Cache selectors
let lastId,
    topMenu = $(links),
    topMenuHeight = topMenu.outerHeight()

// All list items
let menuItems = topMenu.find("a"),
    // Anchors corresponding to menu items
    scrollItems = menuItems.map(function() {

        let item = $($(this).attr("href"));
        return (item.length) ? item : false;
    });

// Bind click handler to menu items
menuItems.click(function(e) {
    let href = $(this).attr("href"),
        offsetTop = href === "#" ? 0 : $(href).offset().top - topMenuHeight + 1;
    $('html, body').stop().animate({
        scrollTop: offsetTop
    }, 300);
    e.preventDefault();
});

// Bind to scroll
$(window).scroll(function() {
    // container scroll position
    let fromTop = $(this).scrollTop() + topMenuHeight;

    // id of current scroll item
    let cur = scrollItems.map(function() {
        if ($(this).offset().top < fromTop)
            return this;
    });
    // the id of the current element
    cur = cur[cur.length - 1];
    let id = cur && cur.length ? cur[0].id : "";

    if (lastId !== id) {
        lastId = id;
        //remove active class
        menuItems
            .parent().removeClass("active")
            .end().filter("[href='#" + id + "']").parent().addClass("active");
    }
});