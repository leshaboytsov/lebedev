<template>
  <div class="filmpages">
    <h1>Здесь вы можете посмотреть выпуск {{ Film.description }} от {{ formatDate(Film.data) }} бесплатно</h1>
    <div class="videoPlyr">
      <div class="videoWrapper">
        <video ref="videoPlayer" controls class="custom-plyr">
          <source :src="videoPath" type="video/mp4" />
        </video>
      </div>
    </div>
  </div>
</template>

<script>
import 'plyr/dist/plyr.css';
import Plyr from 'plyr';
import PlyrAds from 'plyr-ads';

export default {
  data() {
    return {
      Film: {},
      videoPath: '',
      posterPath: '',
      player: null,
      adLoaded: false,
    };
  },
  async created() {
    try {
      const response = await this.$axios.get(`/films/${encodeURIComponent(this.$route.params.url)}`, {
        headers: {
          'Cache-Control': 'no-cache'
        }
      });

      this.Film = response.data;
      this.videoPath = this.getVideoUrl(this.Film.video);
      this.posterPath = this.getImageUrl(this.Film.poster1);
      this.initializePlyr();
    } catch (error) {
      console.error(error);
    }
  },

  methods: {
    async initializePlyr() {
      try {
        this.player = new Plyr(this.$refs.videoPlayer, {
          controls: ['play', 'progress', 'current-time', 'mute', 'volume', 'fullscreen', 'settings'],
          settings: ['speed'],
          ads: {
            enabled: true,
            publisherId: 'your-publisher-id', // Замените на ваш ID из рекламной платформы
            tagUrl: 'https://ssp.bidster.net/vast/00000000-0000-0000-0000-000000000000' // Укажите URL вашего VAST-тега
          }
        });

        // Слушаем событие, когда реклама завершена
        this.player.on('adsended', async () => {
          console.log('Реклама завершена, продолжаем воспроизведение основного контента');
          await this.playMainContent();
        });

        // Устанавливаем источник основного контента
        this.player.source = {
          type: 'video',
          sources: [{
            src: this.videoPath,
            type: 'video/mp4',
          }],
        };
      } catch (error) {
        console.error('Ошибка загрузки Plyr:', error);
      }
    },

    async playMainContent() {
      // Загрузка основного контента
      this.player.source = {
        type: 'video',
        sources: [{
          src: this.videoPath,
          type: 'video/mp4',
        }],
      };
      // Воспроизведение основного контента
      this.player.play();
    },
  
    getImageUrl(posterPath) {
      return `${posterPath}`;
    },
    getVideoUrl(videoPath) {
      return `${videoPath}`;
    },

    formatDate(dateString) {
      const options = { day: 'numeric', month: 'numeric', year: 'numeric' };
      const date = new Date(dateString);
      return date.toLocaleDateString('ru-RU', options);
    },
  },

  head() {
    return {
      title: this.Film.filmName,
      meta: [
        { hid: 'description',  content: this.Film.description },
        { name: 'keywords', content: this.Film.keywords },
      ]
    };
  },
};
</script>
