$(function() {
    let hamburger = $('.hamburger');
    let burger = document.querySelector('hamburger');
    let navbarlinks = $('.navbarlinks');
    let navli = document.querySelectorAll('.navbarlinks li');

    hamburger.on('click', function() {
        if (navbarlinks.prop('id') == 'navactive') {
            navbarlinks.removeAttr('id');
        } else {
            navbarlinks.attr('id', 'navactive');
        }

        navli.forEach((link, index) => {
            if (link.style.animation) {
            link.style.animation = '';
            } else {
            link.style.animation = `navLinkFade 0.5s ease forwards ${index / 6 + 0.5}s`;
            }
        });

        this.classList.toggle('animateburger');
    });
});