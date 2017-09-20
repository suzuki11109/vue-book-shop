import Vuex from 'vuex'
import Vue from 'vue'
Vue.use(Vuex)

const store = new Vuex.Store({
  state: {
    cartItems: []
  },
  getters: {
    totalPrice(state) {
      return state.cartItems.reduce((total, item) => {
        return total + item.item.price * item.amount
      }, 0)
    }
  },
  mutations: {
    'ADD_TO_CART': (state, item) => {
      let foundIndex = state.cartItems.findIndex(cartItem => {
        return cartItem.item.id === item.id
      });

      if (foundIndex > -1) {
        state.cartItems[foundIndex].amount += 1
      } else {
        state.cartItems.push({
          item,
          amount: 1
        })
      }
    }
  }
})

export default store
