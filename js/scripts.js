/*!
* Start Bootstrap - Grayscale v7.0.5 (https://startbootstrap.com/theme/grayscale)
* Copyright 2013-2022 Start Bootstrap
* Licensed under MIT (https://github.com/StartBootstrap/startbootstrap-grayscale/blob/master/LICENSE)
*/
//
// Scripts
// 

window.addEventListener('DOMContentLoaded', event => {

    // Navbar shrink function
    var navbarShrink = function () {
        const navbarCollapsible = document.body.querySelector('#mainNav');
        if (!navbarCollapsible) {
            return;
        }
        if (window.scrollY === 0) {
            navbarCollapsible.classList.remove('navbar-shrink')
        } else {
            navbarCollapsible.classList.add('navbar-shrink')
        }

    };

    // Shrink the navbar 
    navbarShrink();

    // Shrink the navbar when page is scrolled
    document.addEventListener('scroll', navbarShrink);

    // Activate Bootstrap scrollspy on the main nav element
    const mainNav = document.body.querySelector('#mainNav');
    if (mainNav) {
        new bootstrap.ScrollSpy(document.body, {
            target: '#mainNav',
            offset: 74,
        });
    };

    // Collapse responsive navbar when toggler is visible
    const navbarToggler = document.body.querySelector('.navbar-toggler');
    const responsiveNavItems = [].slice.call(
        document.querySelectorAll('#navbarResponsive .nav-link')
    );
    responsiveNavItems.map(function (responsiveNavItem) {
        responsiveNavItem.addEventListener('click', () => {
            if (window.getComputedStyle(navbarToggler).display !== 'none') {
                navbarToggler.click();
            }
        });
    });
/*
    let audio;

    const audioElement = document.getElementById('sound-button');

    window.addEventListener('click', () => {
        if(!audio){
            audio = new Audio('./assets/audio/sound.mp3');
            audio.play();
            audioElement.innerHTML = `<i class="nav-link nav-icon fa-solid fa-volume-high"></i>`
        }
    });

    audioElement.addEventListener('click', () => {
        if(audio.paused) {
            audio.play();
            audioElement.innerHTML = `<i class="nav-link nav-icon fa-solid fa-volume-high"></i>`
        } else {
            audio.pause();
            audioElement.innerHTML = `<i class="nav-link nav-icon fa-solid fa-volume-xmark"></i>`
        }
    })
*/
});
