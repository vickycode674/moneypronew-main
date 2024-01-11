// var swiper = new Swiper(".mySwiper", {
//   slidesPerView: 4,
//   spaceBetween: 30,
//   grabCursor: true,
//   // autoplay: {
//   //   delay: 2500,
//   //   disableOnInteraction: false,
//   //   pauseOnMouseEnter: true,
//   // },
//   slidesPerGroup: 1,
//   loop: true,
//   loopFillGroupWithBlank: true,
//   pagination: {
//     el: ".swiper-pagination",
//     clickable: true,
//   },
//   navigation: {
//     nextEl: ".swiper-button-next",
//     prevEl: ".swiper-button-prev",
//   },
// });
var swiper = new Swiper(".mySwiper", {
  slidesPerView: 1,
  spaceBetween: 30,
  grabCursor: true,
  slidesPerGroup: 1,
  loop: true,
  loopFillGroupWithBlank: true,
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
  breakpoints: {
    576: {
      slidesPerView: 1,
    },
    768: {
      slidesPerView: 1,
    },
    992: {
      slidesPerView: 3,
    },
    1200: {
      slidesPerView: 4,
    },
  },
});


document.addEventListener("DOMContentLoaded", function () {
  "use strict";

  $("#customers-testimonials").owlCarousel({
    loop: true,
    center: true,
    items: 2,
    margin: 0,
    autoplay: true,
    dots: true,
    autoplayTimeout: 6000,
    smartSpeed: 350,
    responsive: {
      0: {
        items: 1,
      },
      768: {
        items: 1,
      },
      1170: {
        items: 3,
      },
    },
  });
});

function toggleMenu() {
  const navContainer = document.getElementById("navContainer");
  navContainer.classList.toggle("show");
}