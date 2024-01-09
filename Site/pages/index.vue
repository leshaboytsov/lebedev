<template>
  <div class="main">
      <div class="movieBlock" v-for="(movie, index) in Movies" :key="index" width="300">
        <nuxt-link :to="`/${movie.url}`"><img :src="movie.poster1" alt="Movie Poster" width="350"/></nuxt-link>
        <div>
        <nuxt-link :to="`/${movie.url}`">{{ movie.filmName }}</nuxt-link>
      </div>
      </div>
  </div>
</template>

<script>
export default {
  async created() {
    try {
      const response = await this.$axios.get(`video`, {
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
  }
}
</script>
