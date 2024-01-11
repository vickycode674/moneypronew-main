var swiper = new Swiper(".mySwiper", {
  slidesPerView: 4,
  spaceBetween: 30,
  grabCursor: true,
  // autoplay: {
  //   delay: 2500,
  //   disableOnInteraction: false,
  //   pauseOnMouseEnter: true,
  // },
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
});

var swiper_ = new Swiper(".mySwiper_", {
  slidesPerView: 3,
  spaceBetween: 20,
  grabCursor: true,
  // autoplay: {
  //   delay: 2500,
  //   disableOnInteraction: false,
  //   pauseOnMouseEnter: true,
  // },
  slidesPerGroup: 1,
  loop: true,
  loopFillGroupWithBlank: true,
  navigation: {
    nextEl: ".swiper-button-next_",
    prevEl: ".swiper-button-prev_",
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
        items: 2,
      },
      1170: {
        items: 3,
      },
    },
  });
});
const accordionTitles = document.querySelectorAll(".questions");

accordionTitles.forEach((accordionTitle) => {
  accordionTitle.addEventListener("click", () => {
    if (accordionTitle.classList.contains("is-open")) {
      accordionTitle.classList.remove("is-open");
    } else {
      const accordionTitlesWithIsOpen = document.querySelectorAll(".is-open");
      accordionTitlesWithIsOpen.forEach((accordionTitleWithIsOpen) => {
        accordionTitleWithIsOpen.classList.remove("is-open");
      });
      accordionTitle.classList.add("is-open");
    }
  });
});
function toggleMenu() {
  const navContainer = document.getElementById("navContainer");
  navContainer.classList.toggle("show");
}
