import Vue from 'vue';
import Vuex from 'vuex';
import categories from './modules/categories'

Vue.use(Vuex)
Vue.config.devtools = true

const storeData = {
  modules: {
     categories,
  }
}

const store = new Vuex.Store(storeData);
export default store;
