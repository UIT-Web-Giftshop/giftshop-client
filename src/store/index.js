import Vue from 'vue';
import Vuex from 'vuex';
import cart from './modules/cart';
import categories from './modules/categories'
import list_products from './modules/list_product'
Vue.use(Vuex)
Vue.config.devtools = true

const storeData = {
  modules: {
     categories,
     list_products,
     cart
  }
}

const store = new Vuex.Store(storeData);
export default store;