import Vue from 'vue'
import App from './App.vue'
import vuetify from './plugins/vuetify'
// import vuex from 'vuex'
// import router from './router'
// Vue.use(vuex)
// import storeConfig from './store'

// const store = new vuex.Store(storeConfig)

Vue.config.productionTip = false

new Vue({
  vuetify,

  // router,
  render: h => h(App),
}).$mount('#app')
