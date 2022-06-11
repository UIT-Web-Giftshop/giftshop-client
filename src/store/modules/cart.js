// import axios from 'axios';
// import { GET_PRODUCTS, GET_PRODUCTS_SERVER, SET_PRODUCTS } from '../mutation-types
var defaultConnectString = 'https://44.193.93.193';
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
      countProductCart: (state) => state.products_cart.length,
      computeTotalBill(state) {
        let price = 0;
        console.log("---");
        // console.log(state);
        state.products_cart.forEach(element => {
          price += element.number * element.price;
        });
        return new Intl.NumberFormat('vi-VN', {style: 'currency', currency: 'VND'}).format(price);
      }
    },
    mutations: {
        setProductList (state, list_products) {
            state.products_cart = list_products;
            console.log(state.products_cart);
        },
        async addProduct(state, product) {
          for (let i = 0; i < state.products_cart.length; i++)
          {
              if (state.products_cart[i].id == product.id)
              {
                product.number = state.products_cart[i].number + 1;
                state.products_cart.splice(i, 1, product);
                sessionStorage.setItem("cart", JSON.stringify(state.products_cart));
                return;
              }
          }
          product.number = 1;   
          state.products_cart.push(product);
          sessionStorage.setItem("cart", JSON.stringify(state.products_cart));
        },
        changeNumber(state, info) {
            for (let i = 0; i < state.products_cart.length; i++)
              if (state.products_cart[i].id == info.id)
              {
                // console.log(state.products_cart[i].id, ' ', id, ' ', number);
                state.products_cart[i].number = info.number;
              }
        }
    },
    actions: {
        createProductCart(context, list_product){
          context.commit('setProductList', list_product);
        },
        addProduct(context, product){
          context.commit('addProduct', product);
        },
        async getProductsFromCartServer (context) {
          const response = await this.$http.get(defaultConnectString + '/api/Carts');
          console.log(response.data);
          context.commit('setProductList', response.data);
          // return Promise.resolve();
        },
        changeNumberOfProduct(context, info) {
          console.log(info.number);
          context.commit("changeNumber", info);
        },
    },

};

export default cart;