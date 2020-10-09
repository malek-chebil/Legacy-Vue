<template>
  <div>
    <div className="shopBody">
      <div className="Row" v-for="element in avatars" :key="element.id">
        <Avatar @changebalance="changebalance" @click="getCardPrice" />
      </div>
    </div>
  </div>
</template>

<script>
import axios from "axios";

export default {
  name: "Shop",
  data() {
    return {
      avatars: [],
      price: "",
    };
  },
  props: ["token", "id"],

  methods: {
    mounted() {
      axios
        .get("/shop")

        .then((response) => {
          this.avatars = response.data;
        })
        .catch((error) => {
          console.log(error);
        });
    },

    getCardPrice() {
        this.price;
      setTimeout(() => {
        console.log("price=>", this.price);
      }, 100);
    },
  },
};
</script>
