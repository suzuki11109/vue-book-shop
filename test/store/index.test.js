import store from '@/store'
import Vuex from 'vuex'

describe('state', () => {
  it('initial empty cartItems', () => {
    expect(store.state.cartItems).toEqual([])
  })
})

describe('mutations', () => {
  beforeEach(() => {
    store.replaceState({
      cartItems: []
    })
  })

  describe('addToCart', () => {

    it('add new item to cart with amount 1', () => {
      const item = {
        id: 1,
        title: 'Hello',
        description: 'ee',
        price: 100,
        author: 'me'
      }
      store.commit('ADD_TO_CART', item)

      expect(store.state.cartItems[0]).toEqual({ item: item, amount: 1 })
    })

    it('when add duplicated item increase amount', () => {
      const item = {
        id: 1,
        title: 'Hello',
        description: 'ee',
        price: 100,
        author: 'me'
      }
      store.commit('ADD_TO_CART', item)
      store.commit('ADD_TO_CART', item)

      expect(store.state.cartItems.length).toBe(1)
      expect(store.state.cartItems[0]).toEqual({ item: item, amount: 2 })
    })
  })
})

describe('getters', () => {
  beforeEach(() => {
    store.replaceState({
      cartItems: []
    })
  })
  describe('totalPrice', () => {
    it('totalPrice', () => {
      expect(store.getters.totalPrice).toBe(0)
    })

    it('calculate price of items in cart', () => {
      store.commit('ADD_TO_CART', {
        id: 1,
        title: 'Hello',
        description: 'ee',
        price: 100,
        author: 'me'
      })
      store.commit('ADD_TO_CART', {
        id: 2,
        title: 'Hello2',
        description: 'ee',
        price: 200,
        author: 'me'
      })
      expect(store.getters.totalPrice).toBe(300)
    })

    it('calculate price of items in cart with multiple amount in each item', () => {
      store.commit('ADD_TO_CART', {
        id: 1,
        title: 'Hello',
        description: 'ee',
        price: 100,
        author: 'me'
      })
      store.commit('ADD_TO_CART', {
        id: 1,
        title: 'Hello',
        description: 'ee',
        price: 100,
        author: 'me'
      })
      store.commit('ADD_TO_CART', {
        id: 2,
        title: 'Hell2',
        description: 'ee',
        price: 200,
        author: 'me'
      })
      expect(store.getters.totalPrice).toBe(400)
    })
  })
})
