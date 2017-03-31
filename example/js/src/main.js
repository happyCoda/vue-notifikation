import Vue from 'vue';
import VueReport from '../../../src/notifikation';
import AppComponent from './app.vue';

Vue.use(VueReport);

new Vue({
  el: '#app',
  render(createElement) {
    return createElement(AppComponent);
  }
});
