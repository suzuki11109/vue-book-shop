import { mount } from 'vue-test-utils'
import BookDetail from '@/components/BookDetail.vue'
import { fetchBook } from '@/services'
import Vue from 'vue'

jest.mock('@/services', () => (
  {
    fetchBook: jest.fn().mockReturnValue(Promise.resolve({
      id: 1,
      title: 'Hello',
      description: 'ee',
      price: 100,
      author: 'me'
    }))
  }
))

describe('BookDetail', () => {
  it('fetch book detail on created', () => {
    const $route = { params: { id: '1' } }
    const wrapper = mount(BookDetail, {
      intercept: { $route }
    })
    Vue.nextTick(() => {
      expect(wrapper.vm.book).toEqual({
        id: 1,
        title: 'Hello',
        description: 'ee',
        price: 100,
        author: 'me'
      })
    })
  })
})
