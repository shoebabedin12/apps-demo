$(document).ready(function () {
   // sticky nav
   var btn = $('.navbar');

   $(window).scroll(function() {
     if ($(window).scrollTop() > 0) {
       btn.addClass('sticky');
     } else {
       btn.removeClass('sticky');
     }
   });

   // sticky nav

  // filtering
  
  // hero slider
  var swiper = new Swiper(".mySwiper", {
    // effect: "fade",
    autoplay: {
      delay: 3000, // Set the delay between slides in milliseconds
      disableOnInteraction: false, // Allow autoplay to continue even when the user interacts with the slider
    },
    loop: true, // Set to true for infinite loop
    speed: 1000, // Adjust the speed value to control the slide transition speed
  
    pagination: {
      el: '.swiper-pagination',
      type: "fraction",
  },
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
  });

  //  slider 2
  var swiper = new Swiper(".slider2", {
    // effect: "fade",
    autoplay: {
      delay: 3000, // Set the delay between slides in milliseconds
      disableOnInteraction: false, // Allow autoplay to continue even when the user interacts with the slider
    },
    loop: true, // Set to true for infinite loop
    speed: 1000, // Adjust the speed value to control the slide transition speed
  
    pagination: {
      el: '.swiper-pagination',
      type: "fraction",
  },
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
  });


})


var galleryTop = new Swiper('.imageSlider', {
  spaceBetween: 10,
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },
   loop: true,
  loopedSlides: 4
});
var galleryThumbs = new Swiper('.text', {
  spaceBetween: 10,
  centeredSlides: true,
  slidesPerView: 'auto',
  touchRatio: 0.2,
  slideToClickedSlide: true,
  loop: true,
  loopedSlides: 4
});
galleryTop.controller.control = galleryThumbs;
galleryThumbs.controller.control = galleryTop;