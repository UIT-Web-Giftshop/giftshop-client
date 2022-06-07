import axios from "axios";
var connect_string_server = 'http://localhost:5000/wishlist';

const wishlist = {
  namespaced: true,
  state(){
    return {
      product_wishlist: []
    }
  },
  getters: {
    getProductsWishlist: (state) => state.product_wishlist,
  },
  mutations: {
    setProductsForWishlist: function(state, products) {
      state.product_wishlist = products;
    }
  },
  actions: {
    async getProductsFromWishlistFromServer(context){
      const response = await axios.get(connect_string_server);
      context.commit("setProductsForWishlist", response.data);
    }
  }
}

export default wishlist;