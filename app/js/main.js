$(document).ready(function() {
    $('#fullpage').fullpage({
        sectionSelector: '.page-section',
        autoScrolling: true,
        afterSlideLoad: function(anchorLink, index, slideAnchor, slideIndex) {

			if(slideIndex!=0) {
                new WOW().init();
	        }
		},
    });
 
});

new Typewriter('#hero__title', {
    strings: 'Welcome to my page !',
    autoStart: true,
    delay: 'natural'
});

var mySwiper = new Swiper('.swiper-container', {
    spaceBetween: 30,
    centeredSlides: true,
    loop: true,
    effect: 'coverflow',
    coverflowEffect: {
        rotate: 35
      },
    breakpoints: {
        320: {
            slidesPerView: 'auto'
        },
        767: {
            slidesPerView: 3
        }
    }
});