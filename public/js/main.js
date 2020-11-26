//Menu show hidden
const navMenu = document.getElementById('nav-menu');
const toggleMenu = document.getElementById('nav-toggle');
const closeMenu = document.getElementById('nav-close');
const closeButton = document.querySelector('#nav-close .fas');
const spinnerIcon = document.getElementById('spinner');


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

// scroll secton

const sections = document.querySelectorAll('section[id]');

function scrollActive() {
    const scrollY = window.pageYOffset;

    sections.forEach(current => () => {
        const sectionHeight = current.offsetHeight
        const sectionTop = current.offsetTop - 50

        sectionId = current.getAttribute('id');

        if (scrollY > sectionTop && scrollY <= sectionTop + sectionHeight) {
            document.querySelector(".nav_menu a[href*='+ sectionId +']").classList.add('active')
        } else {
            document.querySelector(".nav_menu a[href*='+ sectionId +']").classList.remove('active')

        }
    })
}

window.addEventListener('scroll', scrollActive);