<template>
  <div>
    <div v-if="book">
      <h3>{{book.title}}</h3>
      <img :src="book.imgUrl" />
      <p>Category: {{book.category}}</p>
      <p>Author: {{book.author}}</p>
      <p>{{book.description}}</p>
      <p>Price: {{book.price}}</p>
      <button @click="addToCard">Add to cart</button>
    </div>
    <div v-if="bookError">
      <h2>The Book you're looking for is not found</h2>
    </div>
  </div>
</template>

<script>
import { fetchBook } from '@/services'

export default {
  data() {
    return {
      book: null,
      bookError: null
    }
  },
  beforeRouteEnter(to, from, next) {
    fetchBook(to.params.id)
      .then(book => {
        next(vm => vm.book = book)
      })
      .catch(() => {
        this.bookError = true
        next()
      })
  },
  beforeRouteUpdate(to, from, next) {
    this.book = null
    this.bookError = null
    fetchBook(to.params.id)
      .then(book => {
        this.book = book
        next()
      })
      .catch(() => {
        this.bookError = true
        next()
      })
  },
  methods: {
    addToCard() {
      this.$store.commit('ADD_TO_CART', this.book)
    }
  }
}
</script>

<style>

</style>
