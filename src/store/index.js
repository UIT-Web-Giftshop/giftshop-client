import Vue from 'vue';
import Vuex from 'vuex';
import categories from './modules/categories'
import auth from './modules/auth/auth.module'
import notice from './modules/notice'

Vue.use(Vuex)
Vue.config.devtools = true

const storeData = {
  modules: {
    categories,
    auth,
    notice
  }
}

const store = new Vuex.Store(storeData);
export default store;