<template>
  <div class="body">
    <h1 id="Selectchar">Select A Character</h1>
    <a href="#" v-on:click="ScrollR">
      <img src="/images/arrow.png" alt="" id="arrowR"
    /></a>
    <div id="CardPlayer">
      <img :src="charsSrc[i]" width="75px" />
    </div>
    <a href="#" v-on:click="ScrollL">
      <img src="/images/arrow.png" alt="" id="arrowL"
    /></a>
    <button @click="AxiosSelect" id="BTNS">Select</button>
  </div>
</template>

<script>
import axios from "axios";
export default {
  name: "Signup0",
  data() {
    return {
      charsSrc: [
        "/images/chars/0/FD/fd0.png",
        "/images/chars/1/FD/fd0.png",
        "/images/chars/2/FD/fd0.png",
        "/images/chars/3/FD/fd0.png",
        "/images/chars/4/FD/fd0.png"
      ],
      i: 0,
    };
  },
  props: ["id", "Mlogin"],
  methods: {
    ScrollL() {
      if (this.i > 0) {
        this.i = this.i - 1;
      }
    },
    ScrollR() {
      if (this.i < 4) {
        this.i = this.i + 1;
      }
    },
    AxiosSelect() {
      let data = {
        id: this.id,
        currentskin: this.i,
      };
      axios.post("/selectChar", data).then((data) => {
        console.log(data.data);
        this.$emit("Mlogin");
      });
    },
  },
};
</script>


<style scoped>
</style>

