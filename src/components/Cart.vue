<template>
  <div>
    <h2>Cart</h2>
    <div>
      <ul>
        <li v-for="item in $store.state.cartItems" :key="item.id">
          {{item.item.title}} x {{item.amount}}
        </li>
      </ul>
      <p>Total: {{$store.getters.totalPrice}}</p>
    </div>
  </div>
</template>

<script>
export default {

}
</script>

<style>

</style>
