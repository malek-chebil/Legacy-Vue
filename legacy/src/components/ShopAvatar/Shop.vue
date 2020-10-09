<template>
  <div>
    <div className="shopBody">
      <div className="Row" v-for="element in avatars" :key="element.id">
        <Avatar
          @changebalance="changebalance"
          @click="getCardPrice"
          :Id="Id"
          :balance="token"
          :image="element.image"
          :avatar="element.avatar"
          :price="element.price"
        />
      </div>
    </div>
  </div>
</template>

<script>
import axios from "axios";
import Avatar from "./Avatar"

export default {
  name: "Shop",
  components : {
    Avatar
  },
  data() {
    return {
      avatars: [],
      price: "",
    };
  },
  props: ["token", "Id"],
  mounted() {
      this.$nextTick(function () {
      axios.get("/shop")
        .then((response) => {
          console.log('====================================');
          console.log('Avatars',response);
          console.log('====================================');
          this.avatars = response.data;
        })
        .catch((error) => {
          console.log(error);
        })})
    },
  methods: {

    getCardPrice() {
        this.price;
      setTimeout(() => {
        console.log("price=>", this.price);
      }, 100);
    },
  },

};
</script>
