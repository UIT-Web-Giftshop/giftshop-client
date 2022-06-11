// import axios from 'axios';
// import { GET_PRODUCTS, GET_PRODUCTS_SERVER, SET_PRODUCTS } from '../mutation-types
import { $http } from '../../plugins/http-wrapper';
// import { $notify } from '../../plugins/notify';
// var defaultConnectString = 'https://44.193.93.193';

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
        price += element.quantity * element.price;
      });
      return new Intl.NumberFormat('vi-VN', { style: 'currency', currency: 'VND' }).format(price);
    }
  },
  mutations: {
    setProductList(state, list_products) {
      state.products_cart = list_products;
      console.log(state.products_cart);
    },
    async addProduct(state, product) {
      for (let i = 0; i < state.products_cart.length; i++) {
        if (state.products_cart[i].id == product.id) {
          product.number = state.products_cart[i].number + 1;
          state.products_cart.splice(i, 1, product);
          return;
        }
      }
      product.number = 1;
      state.products_cart.push(product);
    },
    async changeNumber(state, info) {
      for (let i = 0; i < state.products_cart.length; i++)
        if (state.products_cart[i].sku == info.sku) {
          // console.log(state.products_cart[i], ' ', info);
          let value = state.products_cart[i].quantity - info.quantity;
          if (value > 0) {
            const response = await $http.put('Carts/remove', {
              sku: info.sku,
              quantity: value
            });
            console.log(response);
            if (response.success == true) {
              state.products_cart[i].quantity = info.quantity;
              if (info.quantity == 0)
                state.products_cart.splice(i, 1);
              // $notify.success('dad');
            }
            else {
              window.location.reload();
            }
          }
          else
            if (value < 0) {
              const response = await $http.put('Carts/add', {
                sku: info.sku,
                quantity: -(value)
              });
              console.log(response);
              if (response.success == true) {
                state.products_cart[i].quantity = info.quantity;
                if (info.quantity == 0)
                  state.products_cart.splice(i, 1);
                // $notify.success('dad');
              }
              else {
                window.location.reload();
              }
            }
        }
    }
  },
  actions: {
    createProductCart(context, list_product) {
      context.commit('setProductList', list_product);
    },
    async addProduct(context, product) {
      const response = await $http.put('Carts/add', {
        sku: product.sku,
        quantity: 1
      });
      console.log(response);
      if (response.success == true) {
        context.dispatch('getProductsFromCartServer');
      }
    },
    async getProductsFromCartServer(context) {
      const response = await $http.get('Carts');
      console.log(response.data);
      context.commit('setProductList', response.data.products);
      // return Promise.resolve();
    },
    changeNumberOfProduct(context, info) {
      context.commit("changeNumber", info);
    },
  },

};

export default cart;