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
<style>
#items{
  width: 193px;
    height: 238px;
    margin-top: 9px;
    border: 1px solid black;

}
.avatar_image {
  /* text-align: center; */
  
  position: relative;
  left: 37px;
  height: 77px;
  top: 7px;
}
.avatar_name {
  width: auto;
  text-align: center;
  color: #aaaabb;
  height: 41px;
  position: relative;
  left: -2px;
  font-size: 21px;
}
.avatar_price {
  position: relative;
  left: 66px;
  font-size: 19px;
  font-family: "Comic Sans MS", cursive, sans-serif;
}
#btnchop{
  margin-left: 33px;
    position: relative;
    left: -11px;
    font-size: 9px;
}
.btn {
  margin-left: 30px;
  position: relative;
  left: -20px;
}
</style>>