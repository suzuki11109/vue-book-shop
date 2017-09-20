import Vue from 'vue'
import Router from 'vue-router'
import Hello from '@/components/Hello'
import Index from '@/components/Index'
import BookDetail from '@/components/BookDetail'
import Error from '@/components/Error'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Index',
      component: Index
    },
    {
      path: '/books/:id',
      name: 'BookDetail',
      component: BookDetail
    },
    {
      path: '/404',
      name: 'Error',
      component: Error
    }
  ]
})
