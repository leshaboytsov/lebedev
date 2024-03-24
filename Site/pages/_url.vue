<template>
  <div class="filmpages">
    <h1>Здесь вы можете посмотреть выпуск {{ Film.description }} от {{ formatDate(Film.data) }} бесплатно</h1>
    <div class="videoPlyr">
      <div class="videoWrapper">
        <div id="player"></div>
      </div>
    </div>

  </div>
</template>

<script>

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
      if (process.client) { // Проверка на наличие объекта document
        this.initPlayer();
      }
    } catch (error) {
      console.error(error);
    }
  },

  methods: {
    initPlayer() {
        const script = document.createElement("script");
        script.async = true;
        script.src = "/playerjs.js"; 
        document.head.appendChild(script);
          script.onload = () => {
          this.initPlayerjs();
        };
      },
      initPlayerjs() {
        let player = new Playerjs({
          id: "player",
          file: this.videoPath
        });
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

 

  
