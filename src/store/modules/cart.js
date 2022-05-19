// import axios from 'axios';
// import { GET_PRODUCTS, GET_PRODUCTS_SERVER, SET_PRODUCTS } from '../mutation-types
// var connect_string_server = 'http://localhost:5000/products';
const cart = {
    namespaced: true,
    state() {
        return {
            products_cart: [
            ],
        }
    },
    getters: {
      getProductCart: (state) => state.products_cart,
      countProductCart: (state) => state.products_cart.length
    },
    mutations: {
        setProductList (state, list_products) {
            state.products_cart = list_products;
            console.log(state.products_cart);
        },
        addProduct(state, product) {
          for (let i = 0; i < state.products_cart.length; i++)
          {
              if (state.products_cart[i].id == product.id)
              {
                product.number = state.products_cart[i].number + 1;
                state.products_cart.splice(i, 1, product);
                return;
              }
          }
          product.number = 1;
          state.products_cart.push(product);
        }
    },
    actions: {
        createProductCart(context, list_product){
          console.log("okkkk");
          context.commit('setProductList', list_product);
        },
        addProduct(context, product){
          context.commit('addProduct', product);
        }
    },

};

export default cart;