<template>
  <div>
    <div className="card" id="items">
      <img className="avatar_image" src="{this.image}" />
      <h1 className="avatar_name" id="avName">
        {{ this.avatar }}
      </h1>
      <h2 className="avatar_price" id="avPrice">{{ this.price }}M-J</h2>
      <button className="btn" id="btnchop" @click="updateBalance">
        purchase
      </button>
    </div>
  </div>
</template>

<script>
export default {
  name: "Avatar",

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
