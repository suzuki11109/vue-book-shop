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
      <h3>The Book you're looking for is not found</h3>
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
  created() {
    this.loadBook()
  },
  watch: {
    '$route': 'loadBook'
  },
  methods: {
    loadBook() {
      this.book = null
      this.bookError = null
      let id = this.$route.params.id
      return fetchBook(this.$route.params.id).then((book) => {
        this.book = book
      }).catch(() => {
        this.bookError = true
      })
    },
    addToCard() {
      this.$store.commit('ADD_TO_CART', this.book)
    }
  },
}
</script>

<style>

</style>
