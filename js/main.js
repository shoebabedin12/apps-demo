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
    // effect: "fade",
    autoplay: {
      delay: 3000, // Set the delay between slides in milliseconds
      disableOnInteraction: false // Allow autoplay to continue even when the user interacts with the slider
    },
    loop: true, // Set to true for infinite loop
    speed: 1000, // Adjust the speed value to control the slide transition speed

    pagination: {
      el: ".swiper-pagination",
      type: "fraction"
    },
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev"
    }
  });

  //  slider 2
  var swiper = new Swiper(".slider2", {
    // effect: "fade",
    autoplay: {
      delay: 3000, // Set the delay between slides in milliseconds
      disableOnInteraction: false // Allow autoplay to continue even when the user interacts with the slider
    },
    loop: true, // Set to true for infinite loop
    speed: 1000, // Adjust the speed value to control the slide transition speed

    pagination: {
      el: ".swiper-pagination",
      type: "fraction"
    },
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev"
    }
  });
});

var galleryTop = new Swiper(".imageSlider", {
  spaceBetween: 10,
  // effect: 'fade',
  // autoplay: {
  //   delay: 3000, 
  //   disableOnInteraction: false 
  // },
  speed: 5000,
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev"
  },
  loop: true,
  loopedSlides: 4
});


particlesJS("particles-js", {
  particles: {
    number: {
      value: 800,
      density: {
        enable: true,
        value_area: 789.1476416322727
      }
    },
    color: {
      value: "#ffffff"
    },
    shape: {
      type: "circle",
      stroke: {
        width: 0,
        color: "#000000"
      },
      polygon: {
        nb_sides: 5
      },
      image: {
        src: "img/github.svg",
        width: 100,
        height: 100
      }
    },
    opacity: {
      value: 0.48927153781200905,
      random: false,
      anim: {
        enable: true,
        speed: 0.2,
        opacity_min: 0,
        sync: false
      }
    },
    size: {
      value: 2,
      random: true,
      anim: {
        enable: true,
        speed: 2,
        size_min: 0,
        sync: false
      }
    },
    line_linked: {
      enable: false,
      distance: 150,
      color: "#ffffff",
      opacity: 0.4,
      width: 1
    },
    move: {
      enable: true,
      speed: 0.2,
      direction: "right",
      random: true,
      straight: false,
      out_mode: "out",
      bounce: false,
      attract: {
        enable: false,
        rotateX: 600,
        rotateY: 1200
      }
    }
  },
  interactivity: {
    detect_on: "canvas",
    events: {
      onhover: {
        enable: true,
        mode: "bubble"
      },
      onclick: {
        enable: true,
        mode: "push"
      },
      resize: true
    },
    modes: {
      grab: {
        distance: 400,
        line_linked: {
          opacity: 1
        }
      },
      bubble: {
        distance: 83.91608391608392,
        size: 1,
        duration: 3,
        opacity: 1,
        speed: 3
      },
      repulse: {
        distance: 200,
        duration: 0.4
      },
      push: {
        particles_nb: 4
      },
      remove: {
        particles_nb: 2
      }
    }
  },
  retina_detect: true
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

// canvas
// var canvas = document.getElementById('myCanvas');
// var innerCanvas = document.getElementsByClassName('innerCanvas');
// var ctx = canvas.getContext('2d');

// console.log(innerCanvas[0].currentSrc);
// var img = new Image();

// img.src = './../images/transparent_face_v2.png';

// img.onload = function() {
//   canvas.width = img.width;
//   canvas.height = img.height;
//   ctx.drawImage(img, 0, 0);
// };
// Get all the Swiper slides
// Get all the canvas elements with class "myCanvas"
var canvasList = document.querySelectorAll('.myCanvas');

// Loop through each canvas element and handle it separately
canvasList.forEach(function(canvas) {
  var innerCanvas = canvas.nextElementSibling; // Get the sibling img element
  var ctx = canvas.getContext('2d'); // Get the 2D rendering context of the canvas

  // Create an image element for the frame
  var frameImg = new Image();
  frameImg.src = './../images/transparent_face_v2.png';

  // Create an image element for the content image
  var contentImg = new Image();
  contentImg.src = innerCanvas.src;

  // Wait for both images to load
  Promise.all([loadImage(frameImg), loadImage(contentImg)])
    .then(function(images) {
      var frame = images[0];
      var content = images[1];

      // Set canvas size to match the frame image dimensions
      canvas.width = frame.width;
      canvas.height = frame.height;

      // Calculate the position and size of the content image within the frame
      var frameAspectRatio = frame.width / frame.height;
      var contentAspectRatio = content.width / content.height;
      var contentX = 0;
      var contentY = 0;
      var contentWidth = frame.width;
      var contentHeight = frame.height;

      if (frameAspectRatio < contentAspectRatio) {
        // The content image is wider than the frame
        contentHeight = frame.width / contentAspectRatio;
        contentY = (frame.height - contentHeight) / 2;
      } else {
        // The content image is taller than the frame
        contentWidth = frame.height * contentAspectRatio;
        contentX = (frame.width - contentWidth) / 2;
      }

      // Draw the frame image
      ctx.drawImage(frame, 0, 0, frame.width, frame.height);

      // Draw the content image within the frame
      ctx.drawImage(content, contentX, contentY, contentWidth, contentHeight);
    })
    .catch(function(error) {
      console.error('Error loading images:', error);
    });
});

// Helper function to load an image and return a promise
function loadImage(img) {
  return new Promise(function(resolve, reject) {
    img.onload = function() {
      resolve(img); // Resolve the promise when the image is loaded
    };
    img.onerror = function() {
      reject(new Error('Image load error')); // Reject the promise if there's an error
    };
  });
}







