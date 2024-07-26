// https://swiperjs.com/get-started#installation
import Swiper from 'swiper';
import { Navigation, Pagination } from 'swiper/modules';
import 'swiper/css';
import { loadVideo } from './modules/about.js';

document.addEventListener('DOMContentLoaded', () => {
  const swiper = new Swiper('.swiper-container', {
    modules: [Navigation, Pagination],
    loop: true,
    autoplay: {
      delay: 2500,
      disableOnInteraction: false,
    },
    pagination: {
      el: '.swiper-pagination',
      clickable: true,
    },
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
  });
});

document.getElementById('play-button').addEventListener('click', () => {
  const playButton = document.getElementById('play-button');

  playButton.style.display = 'none';
  loadVideo('9TZXsZItgdw');
});
