<template>
  <div>
    <div class="card" id="items">
      <img class="avatar_image" :src="image" />
      <h1 class="avatar_name" id="avName">
        {{ this.avatar }}
      </h1>
      <h2 class="avatar_price" id="avPrice">{{ this.price }}M-J</h2>
      <button class="btn" id="btnchop" @click="updateBalance">
        purchase
      </button>
    </div>
  </div>
</template>

<script>
export default {
  name: "Avatar",
  props : [
    "avatar",
    "Id",
    "image",
    "price",
    "balance"
  ],
  methods: {
    updateBalance() {
      if (this.balance >= this.price) {
        this.$emit("changebalance" ,this.balance - this.price);
        alert("Check Your Gmail For Card-Code");
      } else {
        alert(
          "You dont have enough ToKenS Check AboutUs For MoRe Informations"
        );
      }
    },
  },
};
</script>
