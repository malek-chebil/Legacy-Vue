<template>
  <div id="tokens">
    <img src="/image/token.png" alt="" id="tokenImage" />
    <h3 id="token">{{ this.balance }}_MJ</h3>
  </div>
</template>
<script>
import axios from "axios";

export default {
  name: "Token",
  data() {
    return {
      balance: 0,
    };
  },
props :[
    "userid"
],
  methods: {
      
    mounted() {
      let data = {
        id: this.userid,
      };
      setTimeout(() => {
        axios.post("/balanceF", data).then((result) => {
          this.balance = result.data.balance;
          this.$emit("Pass" ,result.data.balance);
        });
      }, 100);
    },
    
  },
};
</script>
