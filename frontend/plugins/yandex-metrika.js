import Vue from 'vue';
import VueYandexMetrika from 'vue-yandex-metrika';

Vue.use(VueYandexMetrika, {
  id: 97138790,
  router: context.app.router,
  env: process.env.NODE_ENV
});
