/******/ (() => { // webpackBootstrap
var __webpack_exports__ = {};
/*!*******************!*\
  !*** ./script.js ***!
  \*******************/
document.addEventListener('keydown', function (event) {
  if (event.key === 'Tab' || event.keyCode === 9) {
    var focusableElements = document.querySelectorAll('a, button, input, select, textarea, [tabindex]:not([tabindex="-1"])');
    focusableElements = Array.from(focusableElements).filter(function (element) {
      return !element.closest('.header').classList.contains('header--hidden') && element.offsetParent !== null;
    });
    var currentFocus = document.activeElement;
    var index = focusableElements.indexOf(currentFocus);
    if (event.shiftKey) {
      index--;
    } else {
      index++;
    }
    if (index >= focusableElements.length) {
      index = 0;
    }
    if (index < 0) {
      index = focusableElements.length - 1;
    }
    focusableElements[index].focus();
    event.preventDefault();
  }
});
window.addEventListener('resize', function () {
  var header = document.querySelector('.header');
  var headerRect = header.getBoundingClientRect();
  var isHeaderHidden = headerRect.top + headerRect.height < 0 || headerRect.bottom < 0;
  if (isHeaderHidden) {
    header.classList.add('header--hidden');
  } else {
    header.classList.remove('header--hidden');
  }
});
function scrollMenu(event) {
  var menu = document.getElementById('menu');
  var menuWidth = menu.offsetWidth;
  var mouseX = event.clientX - menu.getBoundingClientRect().left;
  if (mouseX < menuWidth / 4) {
    menu.scrollLeft -= 10;
  } else if (mouseX > menuWidth * 3 / 4) {
    menu.scrollLeft += 10;
  }
}
document.addEventListener('DOMContentLoaded', function () {
  var mySwiper = new Swiper('.swiper', {
    slidesPerView: 'auto',
    loop: false,
    spaceBetween: 15,
    pagination: {
      el: '.swiper-pagination',
      clickable: true,
      type: 'bullets'
    },
    breakpoints: {
      768: {
        enabled: false,
        spaceBetween: 24,
        autoHeight: false,
        slidesPerView: 3,
        slidesPerGroup: 3,
        slidesPerColumn: 2
      }
    }
  });
  var expendButton = document.querySelector(".expend");
  expendButton.addEventListener("click", function () {
    var buttonText = this.querySelector("span").innerHTML;
    var swiperSlides768 = document.querySelectorAll(".swiper-slide__768");
    var buttonImage = this.querySelector(".expend__button-image");
    if (buttonText === "Показать все") {
      swiperSlides768.forEach(function (slide) {
        slide.style.display = "flex";
      });
      this.querySelector("span").innerHTML = "Скрыть";
      buttonImage.classList.add("rotate180");
    } else {
      if (window.innerWidth >= 924) {
        swiperSlides768.forEach(function (slide) {
          slide.style.display = "none";
        });
        document.querySelectorAll(".swiper-slide__show924").forEach(function (slide) {
          slide.style.display = "flex";
        });
        this.querySelector("span").innerHTML = "Показать все";
        buttonImage.classList.remove("rotate180");
      } else if (window.innerWidth >= 768) {
        swiperSlides768.forEach(function (slide) {
          slide.style.display = "none";
        });
        document.querySelectorAll(".swiper-slide__show924").forEach(function (slide) {
          slide.style.display = "none";
        });
        this.querySelector("span").innerHTML = "Показать все";
        buttonImage.classList.remove("rotate180");
      } else {
        swiperSlides768.forEach(function (slide) {
          slide.style.display = "none";
        });
        document.querySelectorAll(".swiper-slide__show924").forEach(function (slide) {
          slide.style.display = "flex";
        });
        this.querySelector("span").innerHTML = "Показать все";
        buttonImage.classList.remove("rotate180");
      }
    }
  });
  window.addEventListener('resize', function () {
    if (window.innerWidth >= 768) {
      mySwiper.slideTo(0, 0);
    }
  });
});
document.getElementById('toggleMenu').addEventListener('click', function () {
  var asideMenu = document.getElementById('asideMenu');
  if (asideMenu.classList.contains('aside--open')) {
    asideMenu.classList.remove('aside--open');
  } else {
    asideMenu.classList.add('aside--open');
  }
});
document.querySelector('.button-back').addEventListener('click', function () {
  var aside = document.querySelector('aside');
  aside.classList.remove('aside--open');
});
document.querySelector('.button--feedback').addEventListener('click', function () {
  var feedbackBackground = document.querySelector('.feedback_background');
  var feedback = document.querySelector('.feedback');
  feedbackBackground.classList.toggle('feedback_background--open');
  feedback.classList.toggle('feedback--open');
});
document.querySelector('.feedback__button-back').addEventListener('click', function () {
  var feedbackBackground = document.querySelector('.feedback_background');
  var feedback = document.querySelector('.feedback');
  feedbackBackground.classList.remove('feedback_background--open');
  feedback.classList.remove('feedback--open');
});
document.querySelector('.button-status').addEventListener('click', function () {
  var statusBackground = document.querySelector('.status-background');
  var status = document.querySelector('.status');
  statusBackground.classList.toggle('status-background--open');
  status.classList.toggle('status--open');
});
document.querySelector('.status__button-back').addEventListener('click', function () {
  var statusBackground = document.querySelector('.status-background');
  var status = document.querySelector('.status');
  statusBackground.classList.remove('status-background--open');
  status.classList.remove('status--open');
});
document.addEventListener('DOMContentLoaded', function () {
  var mySwiper = new Swiper('.swiper', {
    slidesPerView: 'auto',
    loop: false,
    spaceBetween: 15,
    pagination: {
      el: '.swiper-pagination',
      clickable: true,
      type: 'bullets'
    },
    breakpoints: {
      768: {
        enabled: false,
        spaceBetween: 24,
        autoHeight: false,
        slidesPerView: 3,
        slidesPerGroup: 3,
        slidesPerColumn: 2
      }
    }
  });
  var expendButton = document.querySelector(".expend_brends");
  expendButton.addEventListener("click", function () {
    var buttonText = this.querySelector("span").innerHTML;
    var swiperSlides768 = document.querySelectorAll(".swiper-slide__768");
    var buttonImage = this.querySelector(".expend__button-image");
    if (buttonText === "Показать все") {
      swiperSlides768.forEach(function (slide) {
        slide.style.display = "flex";
      });
      this.querySelector("span").innerHTML = "Скрыть";
      buttonImage.classList.add("rotate180");
    } else {
      if (window.innerWidth >= 924) {
        swiperSlides768.forEach(function (slide) {
          slide.style.display = "none";
        });
        document.querySelectorAll(".swiper-slide__show924").forEach(function (slide) {
          slide.style.display = "flex";
        });
        this.querySelector("span").innerHTML = "Показать все";
        buttonImage.classList.remove("rotate180");
      } else if (window.innerWidth >= 768) {
        swiperSlides768.forEach(function (slide) {
          slide.style.display = "none";
        });
        document.querySelectorAll(".swiper-slide__show924").forEach(function (slide) {
          slide.style.display = "none";
        });
        this.querySelector("span").innerHTML = "Показать все";
        buttonImage.classList.remove("rotate180");
      } else {
        swiperSlides768.forEach(function (slide) {
          slide.style.display = "none";
        });
        document.querySelectorAll(".swiper-slide__show924").forEach(function (slide) {
          slide.style.display = "flex";
        });
        this.querySelector("span").innerHTML = "Показать все";
        buttonImage.classList.remove("rotate180");
      }
    }
  });
  window.addEventListener('resize', function () {
    if (window.innerWidth >= 768) {
      mySwiper.slideTo(0, 0);
    }
  });
});
/******/ })()
;
//# sourceMappingURL=bundle.js.map