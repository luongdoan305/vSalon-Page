
$(document).ready(function () {
  $('.slider-class').slick({
    arrows: false,
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    // autoplay: true,
    // autoplaySpeed: 3000,
  });
});

$('.slide2').slick({
  centerMode: true,
  infinite: true,
  centerPadding: '60px',
  slidesToShow: 3,
  responsive: [
    {
      breakpoint: 768,
      settings: {
        arrows: false,
        centerMode: true,
        centerPadding: '40px',
        slidesToShow: 3
      }
    },
    {
      breakpoint: 480,
      settings: {
        arrows: false,
        centerMode: true,
        centerPadding: '40px',
        slidesToShow: 1
      }
    }
  ]
});

document.addEventListener("DOMContentLoaded", function () {
  var tab1 = document.querySelector('.tablinks[data-img="./image/Landingpage vSalon/iconQuanlysalon.png"]');
  tab1.classList.add('active');
  var activeImgSrc = tab1.getAttribute('data-active-img');
  tab1.querySelector('img').src = activeImgSrc;
});

function openTab(event, tabName) {
  var tabs = document.querySelectorAll('.tablinks');
  tabs.forEach(function (tab) {
    tab.classList.remove('active');
    var imgSrc = tab.getAttribute('data-img');
    tab.querySelector('img').src = imgSrc;
  });
  event.currentTarget.classList.add('active');
  var activeImgSrc = event.currentTarget.getAttribute('data-active-img');
  event.currentTarget.querySelector('img').src = activeImgSrc;

  var i, tabcontent, tablinks;
  tabcontent = document.getElementsByClassName("tabcontent");
  for (i = 0; i < tabcontent.length; i++) {
    tabcontent[i].style.display = "none";
  }
  tablinks = document.getElementsByClassName("tablinks");
  for (i = 0; i < tablinks.length; i++) {
    tablinks[i].className = tablinks[i].className.replace(" active", "");
  }
  document.getElementById(tabName).style.display = "flex";
  event.currentTarget.className += " active";
}

var myFeedbacks = new Swiper(".myFeedbacks", {
  slidesPerView: 3,
  spaceBetween: 20,
  setWrapperSize: true,
  roundLengths: true,
  autoHeight: false,
  autoplay: {
    delay: 2000
  },
  loop: true,
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
  scrollbar: {
    el: '.swiper-scrollbar',
    draggable: true,
  },
  breakpoints: {
    0: {
      slidesPerView: 1,
    },

    1025: {
      slidesPerView: 3,
    },

  },
});

var myClients = new Swiper(".myClients", {
  initialSlide: 1,
  effect: 'coverflow',
  grabCursor: true,
  centeredSlides: true,
  slidesPerView: 1,
  spaceBetween: 30,
  setWrapperSize: true,
  roundLengths: true,
  autoHeight: false,
  autoplay: false,
  loop: false,
  coverflowEffect: {
    rotate: 0,
    stretch: 0,
    depth: 100,
    modifier: 2.5,
    slideShadows: false,
  },
  breakpoints: {
    0: {
      slidesPerView: 1,
    },

    767: {
      slidesPerView: 2,
    },

    1025: {
      slidesPerView: 3,
    },

  },
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
  scrollbar: {
    el: '.swiper-scrollbar',
    draggable: true,
  },
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  }
});

