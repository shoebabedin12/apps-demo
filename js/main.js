$(document).ready(function () {
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
    autoplay: {
      delay: 300, 
      disableOnInteraction: false, 
    },
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

// particle js
// document.addEventListener("DOMContentLoaded", function () {
//   particlesJS("particles-js", {
//     particles: {
//       number: {
//         value: 800,
//         density: {
//           enable: true,
//           value_area: 789.1476416322727,
//         },
//       },
//       color: {
//         value: "#ffffff",
//       },
//       shape: {
//         type: "circle",
//         stroke: {
//           width: 0,
//           color: "#000000",
//         },
//         polygon: {
//           nb_sides: 5,
//         },
//         image: {
//           src: "img/github.svg",
//           width: 100,
//           height: 100,
//         },
//       },
//       opacity: {
//         value: 0.48927153781200905,
//         random: false,
//         anim: {
//           enable: true,
//           speed: 0.2,
//           opacity_min: 0,
//           sync: false,
//         },
//       },
//       size: {
//         value: 2,
//         random: true,
//         anim: {
//           enable: true,
//           speed: 2,
//           size_min: 0,
//           sync: false,
//         },
//       },
//       line_linked: {
//         enable: false,
//         distance: 150,
//         color: "#ffffff",
//         opacity: 0.4,
//         width: 1,
//       },
//       move: {
//         enable: true,
//         speed: 0.2,
//         direction: "right",
//         random: true,
//         straight: false,
//         out_mode: "out",
//         bounce: false,
//         attract: {
//           enable: false,
//           rotateX: 600,
//           rotateY: 1200,
//         },
//       },
//     },
//     interactivity: {
//       detect_on: "canvas",
//       events: {
//         onhover: {
//           enable: true,
//           mode: "bubble",
//         },
//         onclick: {
//           enable: true,
//           mode: "push",
//         },
//         resize: true,
//       },
//       modes: {
//         grab: {
//           distance: 400,
//           line_linked: {
//             opacity: 1,
//           },
//         },
//         bubble: {
//           distance: 83.91608391608392,
//           size: 1,
//           duration: 3,
//           opacity: 1,
//           speed: 3,
//         },
//         repulse: {
//           distance: 200,
//           duration: 0.4,
//         },
//         push: {
//           particles_nb: 4,
//         },
//         remove: {
//           particles_nb: 2,
//         },
//       },
//     },
//     retina_detect: true,
//   });
// });

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
