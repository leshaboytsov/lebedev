<template>
  <div class="main">
    
    <h1>Добро пожаловать на сайт с выпусками шоу Артемия Лебедева</h1>
<p1>Наш фан-сайт посвящен выпускам "Честных новостей".
"Честные новости" от Артемия Лебедева - это информационные обзоры, в которых представлены актуальные события с острым и критическим взглядом. Мы анализируем новости без прикрас, добавляя нотки сарказма и юмора, чтобы подчеркнуть суть происходящего.</p1>
<p2>На нашем сайте вы сможете посмотреть все выпуски этой программ онлайн в хорошем качестве и удобном плеере!</p2>
      <div class="movieBlock" v-for="(movie, index) in Movies" :key="index" width="300">
        <nuxt-link :to="`/${movie.url}`"><img :src="movie.poster1" alt="Movie Poster" width="350"/></nuxt-link>
        <div>
        <nuxt-link :to="`/${movie.url}`">{{ movie.filmName }}</nuxt-link>
        <!-- <nuxt-link :to="`/${movie.data}`">{{ movie.data }}</nuxt-link> -->
        <nuxt-link :to="`/${movie.data}`">{{ formatDate(movie.data) }}</nuxt-link>
      </div>
      </div>
  </div>
</template>

<script>
export default {
  async created() {
    try {
      const response = await this.$axios.get(`films`, {
    headers: {
        'Cache-Control': 'no-cache'
    }
});
      this.Movies=response.data
    } catch (error) {
      console.error(error);
    }
  },
  data() {
    return {
      Movies: []
    };
  },
  head(){
    return{
      title: 'Смотреть выпуски Артемия Лебедева!',
      meta:[
        { charset: 'UTF-8' },
        { name: 'viewport', content: 'width=device-width, initial-scale=1.0' },
        { name: 'description', content: 'Описание вашей веб-страницы' },
        { name: 'keywords', content: 'Артемий Лебедев, видео, контент, дизайн, творчество, ролики, развлечение, эксклюзив, креатив, веб-дизайн, предпринимательство, выпуск №, номер' },
      ]
    }
  }, 
  methods:{
  formatDate(dateString) {
      const options = { day: 'numeric', month: 'numeric', year: 'numeric' };
      const date = new Date(dateString);
      return date.toLocaleDateString('ru-RU', options);
    },
  }
}
</script>
