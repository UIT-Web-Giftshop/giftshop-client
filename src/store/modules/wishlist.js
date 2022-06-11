// import axios from "axios";
// var connect_string_server = 'http://localhost:5000/wishlist';
import { $http } from '../../plugins/http-wrapper';
const wishlist = {
  namespaced: true,
  state() {
    return {
      product_wishlist: []
    }
  },
  getters: {
    getProductsWishlist: (state) => state.product_wishlist,
  },
  mutations: {
    setProductsForWishlist: function (state, products) {
      console.log(products);
      state.product_wishlist = products;
    }
  },
  actions: {
    async getProductsFromWishlistFromServer(context) {
      const response = await $http.get('Wishlists');
      context.commit("setProductsForWishlist", response.data.products);
    },
    async removeProduct (context, product) {
      console.log(product.sku);
      await $http.delete('Wishlists', {
        sku: product.sku
      });
      context.dispatch('getProductsFromWishlistFromServer');
    }
  }
}

export default wishlist;