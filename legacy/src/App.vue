<template>
  <div id="app">
  <Shop />
  <Avatar />
  </div>
</template>

<script>
import Avatar from './components/ShopAvatar/Avatar'
import Shop from './components/ShopAvatar/Shop'
export default {
  name: "App",
  components: {
    Avatar,
    Shop
  },
};
</script>

<style></style>
