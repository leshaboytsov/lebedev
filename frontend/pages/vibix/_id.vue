<template>
  <div class="movie-container" v-if="movie">
    <!-- Постер -->
    <div class="poster-container">
      <img :src="movie.poster_url" :alt="movie.name_rus" class="poster" />
    </div>

    <!-- Информация о фильме -->
    <div class="movie-info">
      <h1>{{ movie.name_rus }} ({{ movie.year }})</h1>
      <p class="original-title">{{ movie.name_original }} ({{ movie.name_eng || "Нет английского названия" }})</p>

      <p><strong>Рейтинг:</strong> ⭐ {{ movie.kp_rating }} / 10 (Кинопоиск)</p>
      <p><strong>IMDB:</strong> ⭐ {{ movie.imdb_rating || "Нет данных" }}</p>

      <p><strong>Жанры:</strong> {{ movie.genre.join(", ") }}</p>
      <p><strong>Страна:</strong> {{ movie.country.join(", ") }}</p>

      <p class="description">{{ movie.description }}</p>
    </div>

    <!-- Видеоплеер -->
    <div class="video-player">
      <iframe
        v-if="movie.iframe_url"
        :src="movie.iframe_url"
        width="100%"
        height="500"
        frameborder="0"
        allowfullscreen
      ></iframe>
    </div>
  </div>
  <div v-else class="loading">Загрузка...</div>
</template>

<script>
export default {
  async asyncData({ params, $axios }) {
    try {
      const response = await $axios.get(`https://vibix.org/api/v1/publisher/videos/kp/${params.id}`, {
        headers: {
          "accept": "application/json",
          "Authorization": "Bearer 7690|GvGdXgs0uabowGyhHGhjWGs95I0yc9g3irQCcvSL37cd2e2c",
        },
      });
      return { movie: response.data };
    } catch (error) {
      console.error("Ошибка загрузки фильма:", error);
      return { movie: null };
    }
  },
};
</script>

<style scoped>
.movie-container {
  display: flex;
  flex-wrap: wrap;
  max-width: 1000px;
  margin: 20px auto;
  padding: 20px;
  background: #222;
  color: white;
  border-radius: 8px;
}

.poster-container {
  flex: 1;
  max-width: 300px;
}

.poster {
  width: 100%;
  border-radius: 8px;
}

.movie-info {
  flex: 2;
  padding-left: 20px;
}

h1 {
  margin-bottom: 10px;
}

.original-title {
  font-size: 16px;
  color: #ccc;
}

.description {
  margin-top: 15px;
  font-size: 14px;
  line-height: 1.5;
}

.video-player {
  width: 100%;
  margin-top: 20px;
}

.loading {
  text-align: center;
  font-size: 20px;
  color: white;
  margin-top: 50px;
}
</style>
