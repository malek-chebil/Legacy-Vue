<template>
  
    <div class="shopBody">
      <div class="Row" v-for="element in avatars" :key="element.id">
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
<style>
.Row {
 display: inline-grid;
    flex-wrap: nowrap;
    background-color: #eeeeee;
  }
.shopBody {
      position: relative;
    top: -3px;
    left: 355px;
    background: #f6f5f7;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    font-family: "Montserrat", sans-serif;
    /* height: 65vh; */
    width: 700px;
    border: solid black 4px;
    /* border-radius: 10%; */
    margin-top: 25px;
    border-style: solid;
    border-radius: 10px;
    background: #8343c300;
    height: 512px;
    width: 602px;
    overflow: scroll;
    overflow-x: hidden;
}


</style>>