import axios from 'axios';
// import { GET_PRODUCTS, GET_PRODUCTS_SERVER, SET_PRODUCTS } from '../mutation-types
var defaultConnectString = 'https://44.193.93.193';
const list_products = {
    namespaced: true,
    state() {
        return {
            products: [],
            connect_string_server: '/api/Products?PageIndex=1&PageSize=20&SortBy=price&IsDesc=true',
            totalCount: 0,
            itemsCount: 0,
            pagesCount: 20,
        }
    },
    getters: {
        getProducts: (state) => state.products,
        getConnectionString: (state) => state.connectString,
        getTotalCount: (state) => state.totalCount,
        getItemsCount: (state) => state.itemsCount,
        getPagesCount: (state) => state.pagesCount

    },
    mutations: {
        setProductList(state, list_products) {
            state.products = list_products;
        },
        setConnectString(state, str) {
            state.connect_string_server = str;
        },
        setToTalCountProduct (state, value) {
            state.totalCount = value;
        },
        setItemsCount (state, value) {
            state.itemsCount = value;
        }
    },
    actions: {
        async getProductsFromServer(context) {
            try {
                context.commit('setItemsCount', 0);
                let connection = context.state.connect_string_server;
                let response = await axios.get(defaultConnectString + connection);
                response = response.data.data;
                // console.log(response);
                context.commit('setProductList', response.items);
                context.commit('setToTalCountProduct', response.allTotalCount);
                context.commit('setItemsCount', response.itemsCount);
            } catch (error) {
                console.log(error);
            }
        },
        setConnectString: (context, connectString) => {
            context.commit('setConnectString', connectString);
        }
    },

};

export default list_products;