import Vue from 'vue'
import App from './App.vue'
import vuetify from './plugins/vuetify'
import router from './router'
import store from './store'
import Default from './views/DefaultView'
import notify from './plugins/notify'
import { $http } from './plugins/http-wrapper'

Vue.component('default-layout', Default)
Vue.config.productionTip = false;
Vue.prototype.$http = $http;
Vue.prototype.$notify = notify;

new Vue({
  vuetify,
  router,
  store,
  render: h => h(App)
}).$mount('#app')
