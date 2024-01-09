<template>

    <div class="filmpages">
      <div v-if="Film.description">
        <h1>{{ Film.description }}</h1>
      </div>

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
import Plyr from 'plyr'


export default {
  data() {
    return {
      Film: {},
      videoPath: '',
      posterPath: '',
      player: null,
    };
  },
  async created() {
    try {
      const response = await this.$axios.get(`/video/${encodeURIComponent(this.$route.params.url)}`, {
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

        this.player.on('play', () => {
          console.log('Воспроизведение начато');
        });

        this.player.source = {
          type: 'video',
          sources: [{
            src: this.videoPath,
            type: 'video/mp4',
          }],
        };
      } catch (error) {
        //console.error('Ошибка загрузки Plyr:', error);
      }
    },

    getImageUrl(posterPath) {
      return `${posterPath}`;
    },
    getVideoUrl(videoPath) {
      return `${videoPath}`;
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

