import Vue from 'vue'
import VueSocketio from 'vue-socket.io'

import App from './App.vue'

// Windows Tessel Connection
//Vue.use(VueSocketio, 'http://192.168.1.158:4000');
// Windows Arduino Connection
//Vue.use(VueSocketio, '127.0.0.1:4040');
// Raspberry PI Zero Connection
Vue.use(VueSocketio, '192.168.1.251:4000');

new Vue({
  el: '#app',
  render: h => h(App),
})
