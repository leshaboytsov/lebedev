<template>
  <div class="container">
    <h1>Тест Vibix</h1>
    <div v-if="loading">Загрузка...</div>
    <div v-else class="movies-grid">
      <div v-for="movie in movies" :key="movie.id" class="movie-card">
        <nuxt-link :to="`/vibix/${movie.kp_id}`">
          <img :src="movie.poster_url" :alt="movie.name_rus" class="poster" />
        </nuxt-link>
        <h3 class="movie-title">
          <nuxt-link :to="`/vibix/${movie.kp_id}`">{{ movie.name_rus }} ({{ movie.year }})</nuxt-link>
        </h3>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted } from 'vue';

const movies = ref([]);
const loading = ref(true);

onMounted(async () => {
  try {
    const response = await fetch('https://vibix.org/api/v1/publisher/videos/links?page=1&limit=20', {
      headers: {
        'accept': 'application/json',
        'Authorization': 'Bearer 7690|GvGdXgs0uabowGyhHGhjWGs95I0yc9g3irQCcvSL37cd2e2c',
      },
    });
    const data = await response.json();
    movies.value = data.data;
  } catch (error) {
    console.error("Ошибка загрузки фильмов:", error);
  } finally {
    loading.value = false;
  }
});
</script>

<style scoped>
/* Общий контейнер */
.container {
  max-width: 1200px;
  margin: 20px auto;
  text-align: center;
}

/* Грид-сетка для фильмов */
.movies-grid {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));
  gap: 20px;
  justify-content: center;
}

/* Карточка фильма */
.movie-card {
  background: #222;
  padding: 10px;
  border-radius: 8px;
  transition: transform 0.3s;
  text-align: center;
  width: 200px;
  display: flex;
  flex-direction: column;
  align-items: center;
}

/* Эффект увеличения при наведении */
.movie-card:hover {
  transform: scale(1.05);
}

/* Постер */
.poster {
  width: 100%;
  border-radius: 8px;
}

/* Текст под картинкой */
.movie-title {
  margin-top: 10px;
  font-size: 14px;
  color: white;
  text-align: center;
  max-width: 90%;
  word-wrap: break-word;
  white-space: normal;
}
.movie-title a{
  text-decoration: none;
  color: white;

}
</style>
