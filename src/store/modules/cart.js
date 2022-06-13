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
      response: null,
      message: "",
      skuResponse: ""
    }
  },
  getters: {
    getProductCart: (state) => state.products_cart,
    countProductCart: (state) => state.products_cart.length,
    getResponse: (state) => state.response,
    getMessage: (state) => state.message,
    getSkuResponse: (state) => state.skuResponse,
    computeTotalBill(state) {
      let price = 0;
      // console.log("---");
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
    setResponse(state, response) {
      state.response = response;
    },
    setMessage(state, message) {
      state.message = message;
    },
    setSkuResponse(state, sku) {
      state.sku = sku;
    },
    addProduct(state, product) {
      for (let i = 0; i < state.products_cart.length; i++) {
        if (state.products_cart[i].sku == product.sku) {
          product.quantity = state.products_cart[i].quantity + 1;
          state.products_cart.splice(i, 1, product);
          state.response = true;
          state.message = "Cập nhật thành công";
          return;
        }
      }
      product.quantity = 1;
      state.products_cart.push(product);
      state.response = true;
      state.message = "Cập nhật thành công";
    },
    async changeNumber(state, info) {
      for (let i = 0; i < state.products_cart.length; i++)
        if (state.products_cart[i].sku == info.sku) {
          let value = state.products_cart[i].quantity - info.quantity;
          console.log('value: ', info);
          if (value > 0) {
            const response = await $http.put('Carts/remove', {
              sku: info.sku,
              quantity: value
            });
            if (response.success == true) {
              state.products_cart[i].quantity = info.quantity;
              state.response = true;
              state.message = "Cập nhật thành công";
              state.skuResponse = info.sku;
              if (info.quantity == 0)
                state.products_cart.splice(i, 1);
            }
            else {
              state.response = false;
              state.message = "Đã xảy ra sự cố";
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
                state.response = true;
                state.message = "Cập nhật thành công";

              }
              else {
                console.log("thất bại");
                state.response = false;
                state.message = "Sản phẩm trong kho không đủ";
                console.log(info.sku,'**');
                state.skuResponse = info.sku;
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
        context.state.response = true;
        context.dispatch('getProductsFromCartServer');
      }
      else {
        context.state.response = false;
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