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
      axios.post("/selectChar", data).then(() => {
        // console.log('slim : 4 data sent to be saved=>', data)
        this.$emit("Mlogin");
      })
      .catch(err => console.log(err))
    },
  },
};
</script>


<style>

.body {
    position: relative;
    top: 29px;
    left: 450px;
    background: #f6f5f7;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    font-family: "Montserrat", sans-serif;
    height: 65vh;
    width: 400px;
    border: #592bff;
    border-radius: 10%;
    border-style: solid;
  }
   #Selectchar{
    position: relative;
    top:-55px;
  }
  #CardPlayer{
    position: relative;
    top:-40px;
    border: solid black 1PX;
    border-radius: 8px;
  }
  #arrowR{
    position: relative;
    left:100px;
    transform: rotate(270deg);
    width:40px;
    top: 50px;
  }
  #arrowL{
    position: relative;
    left: -101px;
    transform: rotate(90deg);
    width:40px;
    top: -139px;
  }
 #BTNS{
   position: relative;
   top:-20px;
 }

</style>

  
