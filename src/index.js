import Vue from 'vue';
import App from './App.vue';
import router from './Router';

new Vue({
  router,
  render: h => h(App)
}).$mount('#root');