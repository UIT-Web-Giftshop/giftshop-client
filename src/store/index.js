import Vue from 'vue';
import Vuex from 'vuex';
import cart from './modules/cart';
import categories from './modules/categories'
import auth from './modules/auth/auth.module'
import notice from './modules/notice'

import list_products from './modules/list_product'
import wishlist from './modules/wishlist'
Vue.use(Vuex)
Vue.config.devtools = true

const storeData = {
  modules: {
    categories,
    auth,
    notice,
    list_products,
    cart,
    wishlist
  }
}

const store = new Vuex.Store(storeData);
export default store;