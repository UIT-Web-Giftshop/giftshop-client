import axios from 'axios';
// import { GET_PRODUCTS, GET_PRODUCTS_SERVER, SET_PRODUCTS } from '../mutation-types
const list_products = {
    namespaced: true,
    state() {
        return {
            products: [],
            connect_string_server: 'https://44.193.93.193/api/Products?PageIndex=1&PageSize=20&SortBy=price&IsDesc=true'
        }
    },
    getters: {
        getProducts: (state) => state.products,
        // getConnectionString: (state) => state.connectString

    },
    mutations: {
        setProductList(state, list_products) {
            state.products = list_products;
            // console.log("ok");   
            // console.log(state.products);
        },
        setConnectString(state, str) {
            state.connectString = str;
        },
    },
    actions: {
        async getProductsFromServer(context) {
            try {
                let connection = context.state.connect_string_server;
                let response = await axios.get(connection);
                response = response.data.data.items;
                console.log(response);
                context.commit('setProductList', response);
            } catch (error) {
                console.log(error);
            }

            // return Promise.resolve();
        },
        setConnectString: (context, connectString) => {
            context.commit('setConnectString', connectString);
        }
    },

};

export default list_products;