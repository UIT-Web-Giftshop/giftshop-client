import axios from 'axios';
// import { GET_PRODUCTS, GET_PRODUCTS_SERVER, SET_PRODUCTS } from '../mutation-types
var connect_string_server = 'http://localhost:5000/products';
const list_products = {
    namespaced: true,
    state() {
        return {
            products: [],
        }
    },
    getters: {
       getProducts: (state) => state.products

    },
    mutations: {
        setProductList (state, list_products) {
            state.products = list_products;
            console.log(state.products);
        }
    },
    actions: {
        async getProductsFromServer (context) {
            context.commit('setProductList', await (await axios.get(connect_string_server)).data);
            return Promise.resolve();
        },
    },

};

export default list_products;