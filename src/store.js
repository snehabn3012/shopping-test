import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

export default new Vuex.Store({
    state: {
        productList: [],
        selectedProduct: {},
        selectedCategory: "men"
    },
    getters: {
        selectedProduct: state => {
            return state.selectedProduct;
        }
    },
    mutations: {
        selectedProduct: (state, payload) => {
            state.selectedProduct = payload;
        },
        selectedCategory: (state, payload) => {
            state.selectedCategory = payload;
        }
    },
    actions: {
        updateTheSelectedProduct: ({ commit }, payload = '') => {
            commit('selectedProduct', payload);
        },
        updateTheSelectedCategory: ({ commit }, payload = '') => {
            commit('selectedCategory', payload);
        },
        updateTheStore: ({ commit }, payload) => {
            commit('mutateStore', payload);
        },
    },
});
