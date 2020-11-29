'use strict';
//Menu show hidden
import { animation_module } from './animations.js';

const navMenu = document.getElementById('nav-menu');
const toggleMenu = document.getElementById('nav-toggle');
const closeMenu = document.getElementById('nav-close');
const closeButton = document.querySelector('#nav-close .fas');
const spinnerIcon = document.getElementById('spinner');

const allNavLinks = document.querySelectorAll('.nav_list a');

animation_module;
// Show
toggleMenu.addEventListener('click', () => {
    navMenu.classList.toggle('show');
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
    closeButton.style.cssText = 'color: red;'
})

// remove menu
const navLink = document.querySelectorAll('.nav_link');

// helper function to remove menu
function linkAction() {
    navMenu.classList.remove('show');
}
navLink.forEach(n => n.addEventListener('click', linkAction));

// ScrollSpy