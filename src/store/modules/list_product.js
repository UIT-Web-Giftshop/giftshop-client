import axios from 'axios';
// import { GET_PRODUCTS, GET_PRODUCTS_SERVER, SET_PRODUCTS } from '../mutation-types
var connect_string_server = 'https://44.193.93.193/api/Products?PageIndex=1&PageSize=20&SortBy=price&IsDesc=true';
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
            // console.log("ok");   
            // console.log(state.products);
        }
    },
    actions: {
        async getProductsFromServer (context) {
            let response = await axios.get(connect_string_server)
            // context.commit('setProductList', await axios.get(connect_string_server).data);
            response = response.data.data.items;
            console.log(response);
            context.commit('setProductList', response);
            // return Promise.resolve();
        },
    },

};

export default list_products;