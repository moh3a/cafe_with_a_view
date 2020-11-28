import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    restaurantName: "La belle vue",
    shoppingCart: 0,
    simpleMenu: [
      {
        name: "Croissant",
        image: {
          source: "/images/croissant.jpg",
          alt: "Un croissant"
        },
        inStock: true,
        price: 20,
        quantity: 1
      },
      {
        name: "Baguette de pain",
        image: {
          source: "/images/french-baguette.jpeg",
          alt: "Quatre baguettes de pain"
        },
        inStock: true,
        price: 25,
        quantity: 1
      },
      {
        name: "Éclair",
        image: {
          source: "/images/eclair.jpg",
          alt: "Éclair au chocolat"
        },
        inStock: false,
        price: 30,
        quantity: 1
      }
    ]
  },
  getters: {
    copyright(state) {
      const currentYear = new Date().getFullYear();
      return `Copyright ${state.restaurantName} ${currentYear}`;
    }
  },
  mutations: {
    ADD_ITEMS_TO_SHOPPING_CART(state, amout) {
      state.shoppingCart += amout
    }
  },
  actions: {
    updateShoppingCart({ commit }, amount) {
      commit("ADD_ITEMS_TO_SHOPPING_CART", amount)
    }
  },
  modules: {}
});
