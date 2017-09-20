<template>
  <div id="app">
    <router-link to="/">
      <h1>Book Shop</h1>
    </router-link>
    <div class="container">
      <div class="flex3">
        <router-view></router-view>
      </div>
      <div class="flex1">
        <cart></cart>
      </div>
    </div>
  </div>
</template>

<script>
import Cart from '@/components/Cart.vue'
export default {
  name: 'app',
  components: {
    Cart
  }
}
</script>

<style>
.container {
  display: flex;
}

.flex3 {
  flex: 3;
}

.flex2 {
  flex: 2;
}

.flex1 {
  flex: 1;
}
</style>
