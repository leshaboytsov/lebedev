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
    });

    this.player.on('play', async () => {
      console.log('Воспроизведение начато');
    });

    this.player.on('canplay', async () => {
      console.log('Видео готово к воспроизведению, загружаем рекламу');
      if (!this.adLoaded) {
        await this.loadVastAd(); 
        this.adLoaded = true;
      }
    });

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




    // Функция для загрузки и воспроизведения VAST-рекламы
    async loadVastAd() {
  try {
    const vastTag = 'https://ssp.bidster.net/vast/00000000-0000-0000-0000-000000000000';
    //const vastTag = 'https://ssp.bidvol.com/vast/pl43822';
    const vastResponse = await fetch(vastTag);
    const vastData = await vastResponse.text();

    // Обработка vastData и добавление рекламного контента к видеоплееру
    const adContentUrl = this.extractAdContentUrl(vastData);
    this.player.on('play', async () => {
      console.log('Воспроизведение рекламы');
    });
    this.player.source = {
      type: 'video',
      sources: [{
        src: adContentUrl,
        type: 'video/mp4',
      }],
    };
  } catch (error) {
    console.error('Ошибка загрузки VAST-рекламы:', error);
  }
},

    // Функция для извлечения URL рекламного контента из XML-структуры VAST-документа
extractAdContentUrl(vastData) {
  const parser = new DOMParser();
  const xmlDoc = parser.parseFromString(vastData, 'text/xml');

  // Находим тег MediaFile
  const mediaFileElement = xmlDoc.querySelector('MediaFile');
  if (mediaFileElement) {
    const adContentUrl = mediaFileElement.textContent.trim();
    return adContentUrl;
  } else {
    throw new Error('URL рекламного контента не найден в XML-документе VAST');
  }
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
