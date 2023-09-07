$(document).ready(function () {
;
  // sticky nav
  var btn = $(".navbar");

  $(window).scroll(function () {
    if ($(window).scrollTop() > 0) {
      btn.addClass("sticky");
    } else {
      btn.removeClass("sticky");
    }
  });

  // sticky nav

  // filtering

  // hero slider
  var swiper = new Swiper(".mySwiper", {
    // autoplay: {
    //   delay: 300, 
    //   disableOnInteraction: false, 
    // },
    loop: true, // Set to true for infinite loop
    speed: 1000, // Adjust the speed value to control the slide transition speed

    pagination: {
      el: ".swiper-pagination",
      type: "fraction",
    },
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
  });


});

var galleryTop = new Swiper(".imageSlider", {
  spaceBetween: 10,
  autoplay: {
    delay: 3000,
    disableOnInteraction: false,
  },
  speed: 1000,
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
  loop: true,
  loopedSlides: 4,
});

// video loaded detect
const video = document.getElementById("myVideo");

// Add an event listener to detect when the video has loaded
video.addEventListener("loadedmetadata", function () {
  console.log("Video metadata loaded. You can now play the video.");
});

// You can also add an event listener for other video events
video.addEventListener("canplaythrough", function () {
  console.log("Video can be played through without buffering.");
});

// Play the video when it's loaded (optional)
video.addEventListener("loadeddata", function () {
  video.play();
});
