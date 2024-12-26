/*!
* Start Bootstrap - Grayscale v7.0.5 (https://startbootstrap.com/theme/grayscale)
* Copyright 2013-2022 Start Bootstrap
* Licensed under MIT (https://github.com/StartBootstrap/startbootstrap-grayscale/blob/master/LICENSE)
*/
//
// Scripts
// 

window.addEventListener('DOMContentLoaded', event => {

    const header = document.querySelector('header');
    const images = [
        './assets/img/bg-1.jpg',
        './assets/img/bg-2.jpg',
        './assets/img/bg-3.jpg'
    ];
    let currentIndex = 0;

    // Prefetch images
    images.forEach((image) => {
        const img = new Image();
        img.src = image;
    });

    // Function to change background
    const changeBackground = () => {
        currentIndex = (currentIndex + 1) % images.length;
        header.style.background = `
        linear-gradient(rgba(0, 0, 0, 0.8) 0%, rgba(0, 0, 0, 0.2) 70%, rgb(0, 0, 0) 100%) 0% 0%, 
        url("${images[currentIndex]}")
      `;
        header.style.backgroundPosition = 'center';
        header.style.backgroundRepeat = 'no-repeat';
        header.style.backgroundAttachment = 'scroll';
        header.style.backgroundSize = 'cover';
    };

    // Change background every 10 seconds
    setInterval(changeBackground, 10000);

    const userAgent = navigator.userAgent || navigator.vendor || window.opera;
    const link = document.getElementById('downloadLink');

    if (/android/i.test(userAgent)) {
        // Set link for Google Play Store
        link.href = "https://play.google.com/store/apps/details?id=com.whatsapp";
    } else if (/iPad|iPhone|iPod/.test(userAgent) && !window.MSStream) {
        // Set link for Apple App Store
        link.href = "https://apps.apple.com/app/whatsapp-messenger/id310633997";
    } else {
        // Set link for WhatsApp web
        link.href = "https://www.whatsapp.com/";
    }

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
