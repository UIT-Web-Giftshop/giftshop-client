import axios from 'axios';
// import { GET_PRODUCTS, GET_PRODUCTS_SERVER, SET_PRODUCTS } from '../mutation-types
var defaultConnectString = 'https://44.193.93.193';
const list_products = {
    namespaced: true,
    state() {
        return {
            products: [],
            // connect_string_server: '/api/Products?PageIndex=1&PageSize=20&SortBy=price&IsDesc=true',
            totalCount: 0,
            itemsCount: 0,
            pagesCount: 2,
            pageIndex: 1,
            itemFilter: '',
            itemSort: 'price',
            isDesc: 'true',
            search: ''
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
        },
        setPageIndex (state, value) {
            state.pageIndex = value;
        },
        setItemFilter (state, value) {
            state.itemFilter = value;
        },
        setItemSort(state, value) {
            state.itemSort = value;
        },
        setIsDesc (state, value) {
            state.isDesc = value;
        },
        setSearch (state, value) {
            state.search = value;
        }
    },
    actions: {
        async getProductsFromServer(context) {
            try {
                context.commit('setItemsCount', 0);
                let connection = '/api/Products?trait=' + context.state.itemFilter + '&PageIndex=' + context.state.pageIndex + '&PageSize=5&SortBy=' + context.state.itemSort + '&IsDesc=' + context.state.isDesc;
                let response = await axios.get(defaultConnectString + connection);
                console.log(response);
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