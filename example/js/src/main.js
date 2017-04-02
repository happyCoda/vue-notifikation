import Vue from 'vue';
import VueNotifikation from '../../../src/index';
import AppComponent from './app.vue';

Vue.use(VueNotifikation);

new Vue({
  el: '#app',
  render(createElement) {
    return createElement(AppComponent);
  }
});
