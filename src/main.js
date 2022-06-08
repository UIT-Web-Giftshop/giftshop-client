import Vue from 'vue'
import App from './App.vue'
import vuetify from './plugins/vuetify'
import router from './router'
import store from './store'
import Default from './views/DefaultView'
import notify from './plugins/notify'
import { $http } from './plugins/http-wrapper'
import NoNavigation from './views/NoNavigation' 

Vue.component('default-layout', Default)
Vue.component('no-navigation-layout', NoNavigation)
Vue.config.productionTip = false;
Vue.prototype.$http = $http;
Vue.prototype.$notify = notify;

const token = store.getters['auth/token']
if (token) {
  $http.setAccessToken(token)
}



new Vue({
  vuetify,
  router,
  store,
  render: h => h(App)
}).$mount('#app')
