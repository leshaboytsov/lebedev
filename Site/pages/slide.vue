<template>
    <div class="swiper-container">
      <div class="swiper-wrapper">
        <div class="swiper-slide">Slide 1</div>
        <div class="swiper-slide">Slide 2</div>
        <div class="swiper-slide">Slide 3</div>
        <!-- Добавьте столько слайдов, сколько вам нужно -->
      </div>

      <!-- Если вам нужны кнопки навигации -->
      <div class="swiper-button-next"></div>
      <div class="swiper-button-prev"></div>
    </div>
  </template>

  <script>
  const Swiper = () => import('swiper');
  import 'swiper/swiper-bundle.css';

  export default {
    mounted() {
      // Используйте this.$nextTick для ожидания окончания рендера компонента
      this.$nextTick(() => {
        // Инициализация Swiper после полного рендера компонента
        new Swiper('.swiper-container', {
          // Ваши настройки Swiper
          navigation: {
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev',
          },
        });
      });
    },
  };
  </script>

  <style scoped>
  /* Ваши стили для слайдера (при необходимости) */
  </style>
