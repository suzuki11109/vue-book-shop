<template>
  <div>
    <div class="book-list">
      <div v-for="book in books" :key="book.id" class="book-item">
        <router-link :to="{ name: 'BookDetail', params: { id: book.id }}">
          <div>
            <img :src="book.imgUrl" />
            <h3>{{book.title}}</h3>
          </div>
        </router-link>
      </div>
    </div>
  </div>
</template>

<script>
import { fetchBooks } from '@/services'

export default {
  data() {
    return {
      books: []
    }
  },
  created() {
    fetchBooks()
      .then(books => {
        this.books = books
      })
  }
}
</script>

<style>
.book-list {
  display: flex;
}

.book-item {
  padding: 10px 20px;
}
</style>
