<template>
    <div class="videoPlyr">
    <div id="player"></div>
</div>
  </template>
  
  <script>
  export default {
    mounted() {
      if (process.client) { // Проверка на наличие объекта document
        this.initPlayer();
      }
    },
  
    methods: {
      initPlayer() {
        // Создаем элемент скрипта для асинхронной загрузки Player.js
        const script = document.createElement("script");
        script.async = true;
        script.src = "/playerjs.js"; // Указываем правильный путь к файлу playerjs.js в папке static
        document.head.appendChild(script);
  
        // Добавляем обработчик события, который инициализирует плеер после загрузки Player.js
        script.onload = () => {
          this.initPlayerjs();
        };
      },
      initPlayerjs() {
        // Создаем плеер после загрузки Player.js
        let player = new Playerjs({
          id: "player",
          file: "http://lebedevnovosti.ru:8000/film/Test/Video/1.mp4", // Замените на ссылку на ваше видео
        });
      },
    },
  };
  </script>
  
  <style>
  #player {
    width: 100%;
  }
  </style>
  